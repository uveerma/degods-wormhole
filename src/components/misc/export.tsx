import { twitterIntentLink } from "@/lib/constants";
import { Button, Flex, Text } from "@chakra-ui/react";
import { UseMutateFunction } from "@tanstack/react-query";
import { FC } from "react";

interface Props {
  mutate: UseMutateFunction;
  isSuccess: boolean;
  multiple?: boolean;
}

const ExportImages: FC<Props> = ({ mutate, isSuccess, multiple }) => {
  return (
    <Flex alignItems="center" mt="10" color="brand.tertiary">
      <Button
        bg="brand.accent"
        px="6"
        rounded="sm"
        h="12"
        fontSize="lg"
        fontWeight="bold"
        onClick={() => mutate()}
        _hover={{
          bg: "brand.accent",
        }}
      >
        Download {multiple ? "Images" : "Image"}
      </Button>
      <Text color="brand.accent">------------------</Text>
      <Button
        bg="brand.accent"
        px="6"
        rounded="sm"
        h="12"
        fontSize="lg"
        fontWeight="bold"
        isDisabled={!isSuccess}
        as="a"
        href={twitterIntentLink}
        target="_blank"
        rel="noopener noreferrer"
        _hover={{
          bg: "brand.accent",
        }}
      >
        Share on Twitter
      </Button>
    </Flex>
  );
};

export { ExportImages };
