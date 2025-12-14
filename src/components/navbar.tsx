import { HStack, Image, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack paddingX={4}>
      <Image src={logo} boxSize="60px" alt="Logo" />

      <Spacer />

      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
