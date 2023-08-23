import { descriptionText, method, titleText } from "@/lib/constants";
import { Flex, Text } from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import dynamic from "next/dynamic";
import { FC } from "react";
import { useAccount } from "wagmi";

const ConnectButton = dynamic(
  () => import("../misc/connect").then((mod) => mod.ConnectButton),
  {
    ssr: false,
  }
);

const Hero: FC = () => {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();

  return (
    <Flex
      direction="column"
      gap="2"
      align="center"
      mt="36"
      color="brand.secondary"
      textAlign="center"
      maxW="4xl"
      mx="auto"
      zIndex={2}
    >
      <Text fontSize="5xl" fontWeight="bold">
        {titleText}
      </Text>

      <Text fontSize="xl">{descriptionText}</Text>

      {method === "walletBased" && !isConnected && <ConnectButton />}
    </Flex>
  );
};

export { Hero };
