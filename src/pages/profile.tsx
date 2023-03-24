import {
	Box,
	Divider,
	Flex,
	Heading,
	Spacer,
	VStack,
	Text,
	Card,
	CardBody,
	HStack,
	useColorModeValue,
	Button
} from "@chakra-ui/react";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { ChangeUserNameModal } from "../components/profilePage/ChangeUserNameModal";
import { isClientState } from "../globalState/atoms/isClientState";
import { isPublishedState } from "../globalState/atoms/isPublishedState";
import { lastPublishedTime } from "../globalState/atoms/lastPublishedTime";
import { userName } from "../globalState/atoms/userName";
import { profileItem } from "../globalState/selector/profileItem";
import { useNovelPublished } from "../hooks/useNovelPublished";

export default function Profile() {
	const isClient = useRecoilValue(isClientState);
	const userPenName = useRecoilValue(userName);
	const profileArray = useRecoilValue(profileItem);
	const backgroundColor = useColorModeValue("gray.100", "gray.600");
	const isPublished = useRecoilValue(isPublishedState);
	const timeStamp = useRecoilValue(lastPublishedTime);
	const { onPublishedNovel } = useNovelPublished();

	return (
		<>
			<Head>
				<title>ユーザープロフィール</title>
				<meta name="description" content="ユーザープロフィール" />
			</Head>
			{isClient ? (
				<Box textAlign={"center"} paddingY={4} h={"90vh"} w={"100%"}>
					<Divider borderWidth="2px" w={"auto"} />
					<Divider marginTop={1} marginLeft={0.5} w={"auto"} />

					<Heading
						w={"100%"}
						textOverflow={"ellipsis"}
						overflow={"hidden"}
						whiteSpace={"nowrap"}
						fontSize={{ base: "md", md: "xl", lg: "2xl", xl: "3xl" }}
					>
						{userPenName}の書斎
					</Heading>

					<Divider marginBottom={1} marginLeft={0.5} w={"auto"} />
					<Divider borderWidth="2px" w={"auto"} />
					{isPublished ? undefined : (
						<Box textAlign={"end"} marginRight={"10%"}>
							<ChangeUserNameModal />
						</Box>
					)}
					<VStack padding={3} h={"auto"}>
						{profileArray.map((item, index) => {
							return (
								<Card
									key={index}
									w={{ base: "300px", md: "400px", lg: "600px" }}
									h={"auto"}
									backgroundColor={backgroundColor}
								>
									<CardBody>
										<Flex>
											<Heading as={"h5"} fontSize={{ base: "md", lg: "x-large" }}>
												{item.heading}
											</Heading>
											<Spacer />
											<HStack>
												<Text fontSize={{ base: "sm", md: "md", lg: "xl" }}>{item.description}</Text>
												<Text fontSize={{ base: "sm", md: "md", lg: "xl" }}>
													{index === 0
														? undefined
														: index === 1 || index === 2 || index === 3
														? "Drafts"
														: index === 4
														? "Characters"
														: undefined}
												</Text>
											</HStack>
										</Flex>
									</CardBody>
								</Card>
							);
						})}
					</VStack>
					<Box textAlign={"center"} marginTop={5}>
						<Button
							colorScheme={"teal"}
							size={{ base: "xs", md: "sm", lg: "md" }}
							fontSize={{ base: "xs", md: "sm", lg: "lg" }}
							onClick={onPublishedNovel}
						>
							Publish The Novel
						</Button>
						<Text>{isPublished ? `最終更新日時：${timeStamp}` : timeStamp}</Text>
					</Box>
				</Box>
			) : undefined}
		</>
	);
}
