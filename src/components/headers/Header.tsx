import { Box, Center, Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { isSelected } from "../../globalState/atoms/isSelected";
import { DrawerLeftArea } from "../LeftColumns/DrawerLeftArea";
import { ColorSwitchButton } from "./ColorSwitchButton";
import { HeaderMenu } from "./HeaderMenu";

//ヘッダーコンポーネント
export const Header = memo(() => {
	const headerBgColor = useColorModeValue("gray.300", "gray.700"); //カラーモードごと背景色
	const isSelect = useRecoilValue(isSelected); //小説がセレクト状態かどうかのフラグ
	const router = useRouter(); //path判定用にuseRouterを利用

	return (
		<>
			<Center
				textAlign={"center"}
				w={"auto"}
				bgColor={headerBgColor}
				h={"40px"}
				p={1.5}
				position={"relative"}
				zIndex={2}
			>
				<Box position={"absolute"} top={"4px"} left={"10px"} display={{ base: "block", lg: "none" }}>
					<HeaderMenu />
				</Box>
				<Box>
					<Link href={"/"} passHref>
						<Heading
							as={"h1"}
							fontSize={{ base: "md", md: "xl", lg: "2xl" }}
							_hover={{ opacity: 0.8, cursor: "pointer" }}
						>
							“ Write Novel Now ”
						</Heading>
					</Link>
				</Box>
				<HStack
					position={"absolute"}
					spacing={2}
					top={"4px"}
					right={"10px"}
					zIndex={2}
					display={{ base: "block", lg: "none" }}
				>
					<ColorSwitchButton aria-label={"darkTheme"} boxSize={8} borderRadius={"full"} />

					{/* 特定のパス以外はドロワーメニューを表示させない */}
					{(router.pathname === "/" || router.pathname === "/profile") && (
						<DrawerLeftArea colorScheme={isSelect ? "orange" : "gray"} />
					)}
				</HStack>
			</Center>
		</>
	);
});

Header.displayName = "Header";
