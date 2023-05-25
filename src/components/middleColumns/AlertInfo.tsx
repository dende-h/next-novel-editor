import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	useDisclosure,
	Text
} from "@chakra-ui/react";
import Link from "next/link";
import React, { memo, useEffect } from "react";

export const AlertInfo = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();

	useEffect(() => {
		onOpen();
	}, []);

	return (
		<>
			<AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							新バージョンのお知らせ
						</AlertDialogHeader>

						<AlertDialogBody>
							<Text>
								{
									"エディターの打ちやすさ向上とバックアップ機能がついた新バージョンをリリースしました。現在のバージョンからの移行はデータ消失の可能性があるため、手動でお願いいたします。旧バージョンの利用は可能ですが今後新機能の更新予定はございません。"
								}
							</Text>
							<Link href={"https://novel-editor-ver2.vercel.app/"} passHref>
								<Text color={"blue"}>{"Re:terature Ver.2はコチラから"}</Text>
							</Link>
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose} _focus={{ boxShadow: "none" }}>
								閉じる
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
});
AlertInfo.displayName = "AlertInfo";
