console.log("fff")
import getAssets from "../api/get-assets";
import { transformAssets } from '../transformers/asstets';

export const fetchAssets = async () => {
  try {
    console.log("fhi")
    const assets = await getAssets().then(transformAssets);
    console.log('assetsassetsassets', assets);
    return { assets };
  } catch (e) {
    console.log('fetchAssetsfetchAssets', e);
  }
};