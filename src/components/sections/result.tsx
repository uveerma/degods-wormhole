import { activeChain, contractAddresses, partnerName, exampleAddress } from "@/lib/constants";
import { simpleHashAxiosClient } from "@/lib/simplehash";
import { urlsSchema } from "@/schemas/url";
import { downloadZip } from "@/utils/helpers/download";
import { Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useAccount } from "wagmi";
import { Renderer } from "../elements/renderer";
import { ExportImages } from "../misc/export";

const Result: FC = () => {
  const { address, isConnected } = useAccount();

  const { data, isLoading } = useQuery({
    queryKey: ["nfts", address],
    queryFn: async () => {
      const { data } = await simpleHashAxiosClient.request({
        method: "GET",
        url: `/api/v0/nfts/owners?chains=${activeChain}&wallet_addresses=${address}&contract_addresses=${contractAddresses[0]}`,
      }); // enter `exampleAddress` instead of `address` in above query param for test purposes

      return urlsSchema.parse(
        data?.nfts.map((nft: any) => {
          return nft.extra_metadata.image_original_url;
        })
      );
    },
    enabled: isConnected,
  });

  const { mutate, isSuccess } = useMutation({
    mutationFn: async () =>
      await downloadZip(data?.map((url: string) => url) || []),
  });

  return (
    <Flex
      direction="column"
      gap="2"
      align="center"
      color="white"
      mt="8"
      zIndex={2}
    >      {data?.length === 0 && (
      <Text fontSize="xl" fontWeight="bold" color="brand.accent">
        You do not have any migrated {partnerName}
      </Text>
    )}

      {isLoading && isConnected ? (
        <Spinner size="lg" mt="10" />
      ) : (
        <Grid
          maxW="4xl"
          mx="auto"
          templateColumns="repeat(5, 1fr)"
          gap="2"
          mt="10"
        >
          {data?.map((url, index) => (
            <Renderer key={index} data={url} multiple />
          ))}
        </Grid>
      )}

      {data && data?.length > 0 && (
        <ExportImages mutate={mutate} isSuccess={isSuccess} multiple />
      )}
    </Flex>
  );
};

export { Result };
