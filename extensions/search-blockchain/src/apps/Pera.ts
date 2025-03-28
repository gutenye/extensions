import { createExplorer } from "./utils";

export default createExplorer({
  url: "https://explorer.perawallet.app/{type}/{query}",
  coin: "Algorand",
  typeMap: {
    address: "address",
    transaction: "tx",
  },
});
