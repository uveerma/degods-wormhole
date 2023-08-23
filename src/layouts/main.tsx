import { NavBar } from "@/components";
import { Box, Image } from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box
      minH="100vh"
      w="full"
      bg="brand.primary"
      display="flex"
      flexDir="column"
      alignItems="center"
      bgImage="url('https://res.cloudinary.com/dtzqgftjk/image/upload/v1680252859/Background-Logo-Mark_scdxd2.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      pb="10"
    >
      <NavBar />
      {children}

      <Image
        src="https://res.cloudinary.com/dtzqgftjk/image/upload/v1680379681/Untitled_design__29_-removebg-preview_ltajcx.png"
        alt="wormhole"
        height="80"
        pos="fixed"
        bottom="0"
        right="0"
        opacity={0.8}
      />
    </Box>
  );
};
export default MainLayout;
