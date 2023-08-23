import { useImage } from "@/lib/hooks/use-image";
import { Box, GridItem, Image, Spinner } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  data: string;
  multiple?: boolean;
  isLoading?: boolean;
}

const Renderer: FC<Props> = ({ data, multiple, isLoading }) => {
  const { loading } = useImage(`/api/generate-png?image=${data}`);
  const dim = multiple ? "32" : "80";

  return (
    <GridItem>
      {loading || isLoading ? (
        <Box
          w={dim}
          h={dim}
          rounded="xl"
          bg="purple.800"
          display="grid"
          placeItems="center"
        >
          <Spinner />
        </Box>
      ) : (
        <Image
          src={`/api/generate-png?image=${data}`}
          alt="haha"
          h={dim}
          w={dim}
          rounded="xl"
        />
      )}
    </GridItem>
  );
};

export { Renderer };
