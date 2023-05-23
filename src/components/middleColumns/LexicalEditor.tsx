/* eslint-disable react/display-name */
import { $createParagraphNode, $createTextNode, $getRoot, $getSelection, EditorState } from "lexical";
import { memo, useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { Box, chakra } from "@chakra-ui/react";
import { useDraft } from "../../hooks/useDraft";
import { useRecoilValue } from "recoil";
import { editorState } from "../../globalState/selector/editorState";
import { useCallback } from "react";

const theme = {
	// Theme styling goes here
};

const ChakraContentEditable = chakra(ContentEditable);

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
	const [editor] = useLexicalComposerContext();

	useEffect(() => {
		// Focus the editor when the effect fires!
		editor.focus();
	}, [editor]);

	return null;
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
	console.error(error);
}

// const Update = memo(() => {
// 	const text = useRecoilValue(editorState);
// 	console.log(text);
// 	const [editor] = useLexicalComposerContext();
// 	useEffect(() => {
// 		editor.update(() => {
// 			// Get the RootNode from the EditorState
// 			const root = $getRoot();

// 			// Create a new ParagraphNode
// 			const paragraphNode = $createParagraphNode();

// 			// Create a new TextNode
// 			const textNode = $createTextNode(text.body);
// 			console.log(textNode);
// 			// Append the text node to the paragraph
// 			paragraphNode.append(textNode);

// 			// Finally, append the paragraph to the root
// 			root.append(paragraphNode);
// 		});
// 	}, []);

// 	return null;
// });

export const LexicalEditor = memo(() => {
	const { onChangeTextArea } = useDraft();
	const text = useRecoilValue(editorState);
	const json = `{"root":{"children":[{"children":[{"detail": 0, "format": 0, "mode": "normal", "style": "", "text": "${text.body}", "type": "text", "version": 1 }],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`;
	const initialEditorState =
		'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';
	const initialConfig = {
		namespace: "MyEditor",
		theme,
		onError,
		editorState: text.body === "" ? undefined : json
	};

	const onChange = (editorState: EditorState) => {
		editorState.read(() => {
			const json = editorState.toJSON();
			console.log(JSON.stringify(json));
			const root = $getRoot().getTextContent();
			onChangeTextArea(root);
		});
	};

	return (
		<LexicalComposer initialConfig={initialConfig}>
			<Box backgroundColor={"gray.100"} position={"relative"} padding={6}>
				<PlainTextPlugin
					contentEditable={<ChakraContentEditable outline={"none"} />}
					placeholder={
						<Box color={"blue.500"} position={"absolute"} top={0} left={0}>
							Enter some text...
						</Box>
					}
					ErrorBoundary={LexicalErrorBoundary}
				/>
				<OnChangePlugin onChange={onChange} />
				<HistoryPlugin />
				<MyCustomAutoFocusPlugin />
				{/* <Update /> */}
			</Box>
		</LexicalComposer>
	);
});