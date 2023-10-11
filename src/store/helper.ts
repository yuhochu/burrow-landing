import BN from "bn.js";
import Decimal from "decimal.js";
import { Account, Contract } from "near-api-js";

import { DEFAULT_PRECISION, NANOS_PER_YEAR, NEAR_DECIMALS } from "./constants";
import { getBurrow } from "../utils";
import { ViewMethodsOracle, IAssetPrice, IPrices, ChangeMethodsLogic } from "../interfaces";
import { isRegistered } from "./wallet";

Decimal.set({ precision: DEFAULT_PRECISION });

export const aprToRate = (apr: string): string => {
  const exp = new Decimal(1).dividedBy(new Decimal(NANOS_PER_YEAR));
  const base = new Decimal(apr).dividedBy(new Decimal(100));
  const result: Decimal = base.plus(new Decimal(1)).pow(exp);
  const roundRes: Decimal = result.mul(new Decimal(10).pow(new Decimal(27)));
  return roundRes.toPrecision(12);
};

export const rateToApr = (rate: string): string => {
  const apr = new Decimal(100)
    .mul(new Decimal(rate).div(new Decimal(10).pow(new Decimal(27))).pow(NANOS_PER_YEAR))
    .sub(100);

  return apr.toFixed(2);
};

export const getPrices = async (): Promise<IPrices | undefined> => {
  const { view, oracleContract } = await getBurrow();

  try {
    const priceResponse: IPrices = (await view(
      oracleContract,
      ViewMethodsOracle[ViewMethodsOracle.get_price_data],
    )) as IPrices;

    if (priceResponse) {
      priceResponse.prices = priceResponse?.prices.map((assetPrice: IAssetPrice) => ({
        ...assetPrice,
        price: assetPrice.price
          ? {
              ...assetPrice.price,
              usd: new Decimal(assetPrice.price?.multiplier || 0).div(10000).toNumber(),
            }
          : null,
      }))!;
    }

    return priceResponse;
  } catch (err: any) {
    console.error("Getting prices failed: ", err.message);
    return undefined;
  }
};

export const expandTokenDecimal = (
  value: string | number | Decimal,
  decimals: string | number,
): Decimal => {
  return new Decimal(value).mul(new Decimal(10).pow(decimals));
};

export const expandToken = (
  value: string | number | Decimal,
  decimals: string | number,
  fixed?: number,
): string => {
  return expandTokenDecimal(value, decimals).toFixed(fixed);
};

export const shrinkToken = (
  value: string | number,
  decimals: string | number,
  fixed?: number,
): string => {
  return new Decimal(value).div(new Decimal(10).pow(decimals)).toFixed(fixed);
};

export const getContract = async (
  account: Account,
  contractAddress: string,
  viewMethods: any,
  changeMethods: any,
): Promise<Contract> => {
  console.log("getContrac1", account);
  console.log("getContrac2", contractAddress);
  console.log("getContrac3", viewMethods);
  console.log("getContrac4", changeMethods)
  const contract: Contract = new Contract(account, contractAddress, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: Object.values(viewMethods)
      .filter((m) => typeof m === "string")
      .map((m) => m as string),
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: Object.values(changeMethods)
      .filter((m) => typeof m === "string")
      .map((m) => m as string),
  });

  return contract;
};

export const registerNearFnCall = async (accountId: string, contract: Contract) =>
  !(await isRegistered(accountId, contract))
    ? [
        {
          methodName: ChangeMethodsLogic[ChangeMethodsLogic.storage_deposit],
          attachedDeposit: new BN(expandToken(0.00125, NEAR_DECIMALS)),
          gas: new BN("5000000000000"),
        },
      ]
    : [];
