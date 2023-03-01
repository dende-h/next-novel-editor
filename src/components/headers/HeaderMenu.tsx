import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

export const HeaderMenu = () => {
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<ChevronDownIcon />}
				bg="gray.300"
				color="gray.600"
				borderRadius="md"
				_hover={{ bg: "gray.500", color: "white" }}
				_active={{ bg: "gray.500", color: "white" }}
				position={"absolute"}
				top={{ base: 1.5, lg: 1 }}
				right={{ base: "5px", lg: "10px" }}
				size={{ base: "xs", md: "sm", lg: "md" }}
			>
				Menu
			</MenuButton>
			<MenuList bgColor="gray.800" color="white" borderRadius="md" boxShadow="md" p={2} _focus={{ outline: "none" }}>
				<MenuItem bgColor="gray.800" _hover={{ bgColor: "gray.600" }}>
					Profile
				</MenuItem>
				<MenuItem bgColor="gray.800" _hover={{ bgColor: "gray.600" }}>
					Draft Preview
				</MenuItem>
				<MenuItem bgColor="gray.800" _hover={{ bgColor: "gray.600" }}>
					Novel Site
				</MenuItem>
				<MenuItem
					as={"a"}
					href={"https://notion-blog-nextjs-nine.vercel.app/"}
					target="_blank"
					rel="noopener noreferrer"
					bgColor="gray.800"
					_hover={{ bgColor: "gray.600" }}
				>
					Blog
				</MenuItem>
				<MenuItem as={"a"} href="/contact" bgColor="gray.800" _hover={{ bgColor: "gray.600" }}>
					お問い合わせフォーム
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
