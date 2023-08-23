import { partnerImage } from "@/lib/constants";
import { Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

const NavBar: FC = () => {
  return (
    <Flex
      pos="absolute"
      top="0"
      py="10"
      color="brand.secondary"
      w="full"
      justify="center"
      align="center"
      gap="3"
    >
      <Image src="/assets/wormhole.svg" alt="wormhole" height="8" />
      <Text>x</Text>
      <Image
        src={`${partnerImage}`}
        alt="partner"
        height="7"
      />
    </Flex>
  );
};

export { NavBar };
