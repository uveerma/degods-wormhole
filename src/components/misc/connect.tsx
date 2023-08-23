import { Button } from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { FC } from "react";

const ConnectButton = () => {
  const { openConnectModal } = useConnectModal();

  return (
    <Button
      bg="brand.accent"
      px="16"
      rounded="sm"
      color="brand.tertiary"
      h="12"
      fontSize="lg"
      fontWeight="bold"
      onClick={openConnectModal}
      mt="6"
    >
      Connect Wallet
    </Button>
  );
};

export { ConnectButton };
