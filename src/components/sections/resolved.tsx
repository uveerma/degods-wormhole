import { activeChain, contractAddresses, partnerName } from "@/lib/constants";
import { simpleHashAxiosClient } from "@/lib/simplehash";
import { urlSchema } from "@/schemas/url";
import { downloadZip } from "@/utils/helpers/download";
import { Button, Flex, Input } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { FC, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";
import { Renderer } from "../elements/renderer";
import { ExportImages } from "../misc/export";

const Resolver: FC = () => {
  const [degodId, setDegodId] = useState<string>("");
  const [imageURL, setImageURL] = useState<string>("");

  const { mutate: resolveNFT, isLoading } = useMutation({
    mutationFn: async () => {
      setImageURL("");
      const { data } = await simpleHashAxiosClient.request({
        method: "GET",
        url: `/api/v0/nfts/${activeChain}/${contractAddresses[0]}/${Number(degodId) - 1}`,
      });

      return urlSchema.parse(data.extra_metadata.image_original_url);
    },
    onSuccess: (data) => {
      data && setImageURL(data);
    },
    onError: () => {
      toast.error("NFT not found");
      setImageURL("");
    },
  });

  const { mutate, isSuccess } = useMutation({
    mutationFn: async () => await downloadZip([imageURL]),
  });

  return (
    <Flex
      direction="column"
      gap="2"
      align="center"
      color="white"
      mt="8"
      zIndex={2}
    >      <form
      onSubmit={(e) => {
        e.preventDefault();
        resolveNFT();
      }}
    >
        <Flex alignItems="center" gap="2">
          <Input
            placeholder={`Your ${partnerName} ID here`}
            value={degodId}
            onChange={(e) => {
              setDegodId(e.target.value);
            }}
            isRequired
            color="brand.secondary"
            type="number"
          />

          <Button
            bg="brand.accent"
            px="3"
            rounded="sm"
            color="brand.tertiary"
            h="10"
            fontSize="lg"
            fontWeight="bold"
            type="submit"
            _hover={{
              bg: "brand.accent",
            }}
            isLoading={isLoading}
          >
            <AiOutlineSearch size={24} />
          </Button>
        </Flex>
      </form>

      {imageURL && (
        <Flex justifyContent="center" py="4">
          <Renderer data={imageURL} isLoading={isLoading} />
        </Flex>
      )}

      {imageURL !== "" && (
        <ExportImages mutate={mutate} isSuccess={isSuccess} />
      )}
    </Flex>
  );
};

export { Resolver };
