export enum ViewMethodsLogic {
  // accounts
  get_account,
  get_accounts_paged,
  // assets
  get_asset,
  get_assets,
  get_assets_paged,
  // config
  get_config,
  // farms
  get_asset_farm,
  get_asset_farms,
  get_asset_farms_paged,
  storage_balance_of,
  check_registration,
}

// Change methods can modify the state. But you don't receive the returned value when called.
export enum ChangeMethodsLogic {
  // init
  new,
  execute,
  // register
  storage_deposit,
  // config
  update_config,
  // assets
  add_asset,
  update_asset,
  ft_on_transfer,
  oracle_on_call,
  // farms
  account_farm_claim_all,
  add_asset_farm_reward,
  // stake
  account_stake_booster,
  account_unstake_booster,
  register_account,
}

export enum ViewMethodsOracle {
  get_price_data,
}

// Change methods can modify the state. But you don't receive the returned value when called.
export enum ChangeMethodsOracle {
  oracle_call,
}

export enum ChangeMethodsNearToken {
  near_deposit,
  near_withdraw,
}

export enum ViewMethodsToken {
  ft_metadata,
  ft_balance_of,
  storage_balance_of,
  check_registration,
}

export enum ChangeMethodsToken {
  ft_transfer_call,
  storage_deposit,
  register_account,
}
