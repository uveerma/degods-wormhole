const titleText = "Flaunt your DeGods!";
const descriptionText =
  "DeGods wormholed to the Ethereum network? Time to flaunt them all on Twitter, verify ownership, and create your special link!";

const contractAddresses = ["0x8821bee2ba0df28761afff119d66390d594cd280"];
const exampleAddress = "0xe4e968B3Abe7123F18b318e8ad17Ce3826B5cFF6";

const twitterIntentLink =
  "https://twitter.com/intent/tweet?text=Just%20migrated%20my%20%40DeGodsNFT%20to%20the%20Ethereum%20network%2C%20powered%20by%20%40wormholecrypto%20%F0%9F%8C%AA%EF%B8%8F%20(make%20sure%20to%20add%20your%20downloaded%20images%20in%20the%20tweet)";
const partnerName = "DeGods";
const partnerImage = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1680352925/svgviewer-png-output_ki3wvq.png";
const method: "walletBased" | "inputBased" = "inputBased";
const title = "Wormhole x DeGods";
const activeChain: "polygon" | "ethereum" = "ethereum";

export {
  titleText,
  descriptionText,
  contractAddresses,
  partnerImage,
  exampleAddress,
  twitterIntentLink,
  partnerName,
  method,
  title,
  activeChain,
};
