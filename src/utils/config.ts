import { ConnectConfig } from "near-api-js";

const processEnv = import.meta.env

export const LOGIC_CONTRACT_NAME = processEnv.VITE_PUBLIC_CONTRACT_NAME as string;
export const DUST_THRESHOLD = 0.001;
console.log("process.envprocess.env",processEnv)
export const hiddenAssets = ["ref.fakes.testnet", "meta-token.near"];

export const defaultNetwork = (processEnv.VITE_PUBLIC_DEFAULT_NETWORK ||
  processEnv.NODE_ENV ||
  "development") as any;

const META_TOKEN = { testnet: undefined, mainnet: "meta-token.near" };
const REF_TOKEN = { testnet: "ref.fakes.testnet", mainnet: "token.v2.ref-finance.near" };
export const BRRR_TOKEN = {
  testnet: "test_brrr.1638481328.burrow.testnet",
  mainnet: "token.burrow.near",
};

export const WALLET_CONNECT_ID =
  processEnv.NEXT_PUBLIC_WALLET_CONNECT_ID || ("87e549918631f833447b56c15354e450" as string);

export const missingPriceTokens = [REF_TOKEN, META_TOKEN, BRRR_TOKEN];
const getConfig = (env: string = defaultNetwork) => {
  switch (env) {
    case "production":
    case "mainnet":
      return {
        networkId: "mainnet",
        nodeUrl: "https://rpc.mainnet.near.org",
        walletUrl: "https://wallet.near.org",
        helperUrl: "https://helper.mainnet.near.org",
        explorerUrl: "https://explorer.mainnet.near.org",
        centralizationUrl: "https://api.data-service.ref-finance/burrow",
        liquidationUrl:
          processEnv.NEXT_PUBLIC_LIQUIDATION_API_HOST ||
          "https://api.data-service.ref-finance.com",
        recordsUrl: processEnv.NEXT_PUBLIC_RECORDS_API_HOST || "https://indexer.ref.finance",
        SPECIAL_REGISTRATION_TOKEN_IDS: [
          "17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1",
        ],
      } as unknown as ConnectConfig;

    case "development":
    case "testnet":
      return {
        networkId: "testnet",
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
        centralizationUrl: "https://dev.data-service.ref-finance.com/burrow",
        liquidationUrl: "https://dev.data-service.ref-finance.com",
        recordsUrl: "https://dev-indexer.ref-finance.com",
        SPECIAL_REGISTRATION_TOKEN_IDS: [],
      } as unknown as ConnectConfig;
    case "betanet":
      return {
        networkId: "betanet",
        nodeUrl: "https://rpc.betanet.near.org",
        walletUrl: "https://wallet.betanet.near.org",
        helperUrl: "https://helper.betanet.near.org",
        explorerUrl: "https://explorer.betanet.near.org",
        SPECIAL_REGISTRATION_TOKEN_IDS: [],
      } as unknown as ConnectConfig;
    case "local":
      return {
        networkId: "local",
        nodeUrl: "http://localhost:3030",
        keyPath: `${processEnv.HOME}/.near/validator_key.json`,
        walletUrl: "http://localhost:4000/wallet",
      } as ConnectConfig;
    case "test":
    case "ci":
      return {
        networkId: "shared-test",
        nodeUrl: "https://rpc.ci-testnet.near.org",
        masterAccount: "test.near",
      } as ConnectConfig;
    case "ci-betanet":
      return {
        networkId: "shared-test-staging",
        nodeUrl: "https://rpc.ci-betanet.near.org",
        masterAccount: "test.near",
      } as ConnectConfig;
    default:
      throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`);
  }
};

export const isTestnet = getConfig(defaultNetwork).networkId === "testnet";

export default getConfig;
