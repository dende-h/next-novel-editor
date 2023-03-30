import { Box, IconButton, Tooltip, VStack } from "@chakra-ui/react";
import { memo } from "react";
import { AiFillEdit, AiFillIdcard, AiFillMail } from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import { IoLibrarySharp } from "react-icons/io5";
import { HiLibrary } from "react-icons/hi";
import { ColorSwitchButton } from "../headers/ColorSwitchButton";
import Link from "next/link";

export const LeftMenuBar = memo(() => {
	// eslint-disable-next-line react/jsx-key
	const menuIcons = [<AiFillEdit />, <AiFillIdcard />, <IoLibrarySharp />, <HiLibrary />, <ImBlog />, <AiFillMail />];
	const tooltipLabels = [
		"小説書くところ",
		"実績をみるところ",
		"書いた小説を読むところ",
		"commingsoon",
		"管理人のブログ",
		"お問い合わせ"
	];
	const path = ["/", "/profile", "/drafts", "/commingsoon", "https://notion-blog-nextjs-nine.vercel.app/", "/contact"];

	return (
		<>
			<VStack
				bgColor={"blackAlpha.800"}
				position={"relative"}
				zIndex={4}
				w={"55px"}
				h={"100%"}
				display={{ base: "none", lg: "block" }}
				textAlign={"center"}
				spacing={6}
				paddingY={8}
			>
				{menuIcons.map((item, index) => {
					return (
						<Box key={index}>
							<Tooltip label={tooltipLabels[index]} placement={"right-end"}>
								<Link href={path[index]} passHref>
									<IconButton
										aria-label="menuList"
										icon={item}
										variant="ghost"
										colorScheme={"twitter"}
										fontSize="24px"
										boxSize={10}
									/>
								</Link>
							</Tooltip>
						</Box>
					);
				})}
				<ColorSwitchButton
					aria-label={"dark-sw"}
					boxSize={10}
					borderRadius={"full"}
					variant="ghost"
					colorScheme={"teal"}
				/>
			</VStack>
		</>
	);
});

LeftMenuBar.displayName = "RightMenuBar";
