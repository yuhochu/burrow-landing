import getAssets from "../api/get-assets";
import { transformAssets } from '../transformers/asstets';

export const fetchAssets = async () => {
  try {
    const assets = await getAssets().then(transformAssets);
    console.log('assetsassetsassets', assets);
    return { assets };
  } catch (e) {
    console.log('fetchAssetsfetchAssets', e);
  }
};