import { Commitment } from "@solana/web3.js";

export enum NetworkName {
  LOCALHOST = "localhost",
  DEVNET = "devnet",
  DEVNET_GENESYSGO = "devnet-genesysgo",
  DEVNET_ALCHEMY = "devnet-alchemy",
  TESTNET = "testnet",
  MAINNET_BETA = "mainnet-beta",
  MAINNET_BETA_GENESYSGO = "mainnet-beta-genesysgo",
  MAINNET_BETA_SERUM = "mainnet-beta-serum",
  CUSTOM = "custom",
}

export enum Endpoint {
  LOCALHOST = "http://localhost:8899",
  DEVNET = "https://api.devnet.solana.com",
  DEVNET_GENESYSGO = "https://devnet.genesysgo.net/",
  DEVNET_ALCHEMY = "https://solana-devnet.g.alchemy.com/v2/demo",
  TESTNET = "https://api.testnet.solana.com",
  MAINNET_BETA = "https://api.mainnet-beta.solana.com",
  MAINNET_BETA_GENESYSGO = "https://ssc-dao.genesysgo.net",
  MAINNET_BETA_SERUM = "https://solana-api.projectserum.com",
  CUSTOM = "CUSTOM",
}

interface Network {
  name: NetworkName;
  endpoint: Endpoint;
}

export const NETWORKS: Network[] = [
  {
    name: NetworkName.LOCALHOST,
    endpoint: Endpoint.LOCALHOST,
  },
  {
    name: NetworkName.DEVNET,
    endpoint: Endpoint.DEVNET,
  },
  {
    name: NetworkName.DEVNET_GENESYSGO,
    endpoint: Endpoint.DEVNET_GENESYSGO,
  },
  {
    name: NetworkName.DEVNET_ALCHEMY,
    endpoint: Endpoint.DEVNET_ALCHEMY,
  },
  {
    name: NetworkName.TESTNET,
    endpoint: Endpoint.TESTNET,
  },
  {
    name: NetworkName.MAINNET_BETA,
    endpoint: Endpoint.MAINNET_BETA,
  },
  {
    name: NetworkName.MAINNET_BETA_GENESYSGO,
    endpoint: Endpoint.MAINNET_BETA_GENESYSGO,
  },
  {
    name: NetworkName.MAINNET_BETA_SERUM,
    endpoint: Endpoint.MAINNET_BETA_SERUM,
  },
  {
    name: NetworkName.CUSTOM,
    endpoint: Endpoint.CUSTOM,
  },
];

export const COMMITMENT_LEVELS: Commitment[] = [
  "processed",
  "confirmed",
  "finalized",
];
