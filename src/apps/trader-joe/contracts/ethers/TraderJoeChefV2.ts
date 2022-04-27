/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface TraderJoeChefV2Interface extends utils.Interface {
  functions: {
    'add(uint256,address,address)': FunctionFragment;
    'deposit(uint256,uint256)': FunctionFragment;
    'dev(address)': FunctionFragment;
    'devAddr()': FunctionFragment;
    'devPercent()': FunctionFragment;
    'emergencyWithdraw(uint256)': FunctionFragment;
    'investorAddr()': FunctionFragment;
    'investorPercent()': FunctionFragment;
    'joe()': FunctionFragment;
    'joePerSec()': FunctionFragment;
    'massUpdatePools()': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingTokens(uint256,address)': FunctionFragment;
    'poolInfo(uint256)': FunctionFragment;
    'poolLength()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rewarderBonusTokenInfo(uint256)': FunctionFragment;
    'set(uint256,uint256,address,bool)': FunctionFragment;
    'setDevPercent(uint256)': FunctionFragment;
    'setInvestorAddr(address)': FunctionFragment;
    'setInvestorPercent(uint256)': FunctionFragment;
    'setTreasuryAddr(address)': FunctionFragment;
    'setTreasuryPercent(uint256)': FunctionFragment;
    'startTimestamp()': FunctionFragment;
    'totalAllocPoint()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'treasuryAddr()': FunctionFragment;
    'treasuryPercent()': FunctionFragment;
    'updateEmissionRate(uint256)': FunctionFragment;
    'updatePool(uint256)': FunctionFragment;
    'userInfo(uint256,address)': FunctionFragment;
    'withdraw(uint256,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'add'
      | 'deposit'
      | 'dev'
      | 'devAddr'
      | 'devPercent'
      | 'emergencyWithdraw'
      | 'investorAddr'
      | 'investorPercent'
      | 'joe'
      | 'joePerSec'
      | 'massUpdatePools'
      | 'owner'
      | 'pendingTokens'
      | 'poolInfo'
      | 'poolLength'
      | 'renounceOwnership'
      | 'rewarderBonusTokenInfo'
      | 'set'
      | 'setDevPercent'
      | 'setInvestorAddr'
      | 'setInvestorPercent'
      | 'setTreasuryAddr'
      | 'setTreasuryPercent'
      | 'startTimestamp'
      | 'totalAllocPoint'
      | 'transferOwnership'
      | 'treasuryAddr'
      | 'treasuryPercent'
      | 'updateEmissionRate'
      | 'updatePool'
      | 'userInfo'
      | 'withdraw',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'add', values: [BigNumberish, string, string]): string;
  encodeFunctionData(functionFragment: 'deposit', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'dev', values: [string]): string;
  encodeFunctionData(functionFragment: 'devAddr', values?: undefined): string;
  encodeFunctionData(functionFragment: 'devPercent', values?: undefined): string;
  encodeFunctionData(functionFragment: 'emergencyWithdraw', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'investorAddr', values?: undefined): string;
  encodeFunctionData(functionFragment: 'investorPercent', values?: undefined): string;
  encodeFunctionData(functionFragment: 'joe', values?: undefined): string;
  encodeFunctionData(functionFragment: 'joePerSec', values?: undefined): string;
  encodeFunctionData(functionFragment: 'massUpdatePools', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingTokens', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'poolInfo', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'poolLength', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewarderBonusTokenInfo', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'set', values: [BigNumberish, BigNumberish, string, boolean]): string;
  encodeFunctionData(functionFragment: 'setDevPercent', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setInvestorAddr', values: [string]): string;
  encodeFunctionData(functionFragment: 'setInvestorPercent', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setTreasuryAddr', values: [string]): string;
  encodeFunctionData(functionFragment: 'setTreasuryPercent', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'startTimestamp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalAllocPoint', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'treasuryAddr', values?: undefined): string;
  encodeFunctionData(functionFragment: 'treasuryPercent', values?: undefined): string;
  encodeFunctionData(functionFragment: 'updateEmissionRate', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'updatePool', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'userInfo', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish, BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'add', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'dev', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'devAddr', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'devPercent', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'investorAddr', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'investorPercent', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'joe', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'joePerSec', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'massUpdatePools', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewarderBonusTokenInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'set', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDevPercent', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setInvestorAddr', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setInvestorPercent', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTreasuryAddr', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTreasuryPercent', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'startTimestamp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalAllocPoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'treasuryAddr', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'treasuryPercent', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateEmissionRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'Add(uint256,uint256,address,address)': EventFragment;
    'Deposit(address,uint256,uint256)': EventFragment;
    'EmergencyWithdraw(address,uint256,uint256)': EventFragment;
    'Harvest(address,uint256,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Set(uint256,uint256,address,bool)': EventFragment;
    'SetDevAddress(address,address)': EventFragment;
    'UpdateEmissionRate(address,uint256)': EventFragment;
    'UpdatePool(uint256,uint256,uint256,uint256)': EventFragment;
    'Withdraw(address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Add'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EmergencyWithdraw'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Harvest'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Set'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetDevAddress'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdateEmissionRate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdatePool'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export interface AddEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
  lpToken: string;
  rewarder: string;
}
export type AddEvent = TypedEvent<[BigNumber, BigNumber, string, string], AddEventObject>;

export type AddEventFilter = TypedEventFilter<AddEvent>;

export interface DepositEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EmergencyWithdrawEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type EmergencyWithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], EmergencyWithdrawEventObject>;

export type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;

export interface HarvestEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type HarvestEvent = TypedEvent<[string, BigNumber, BigNumber], HarvestEventObject>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface SetEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
  rewarder: string;
  overwrite: boolean;
}
export type SetEvent = TypedEvent<[BigNumber, BigNumber, string, boolean], SetEventObject>;

export type SetEventFilter = TypedEventFilter<SetEvent>;

export interface SetDevAddressEventObject {
  oldAddress: string;
  newAddress: string;
}
export type SetDevAddressEvent = TypedEvent<[string, string], SetDevAddressEventObject>;

export type SetDevAddressEventFilter = TypedEventFilter<SetDevAddressEvent>;

export interface UpdateEmissionRateEventObject {
  user: string;
  _joePerSec: BigNumber;
}
export type UpdateEmissionRateEvent = TypedEvent<[string, BigNumber], UpdateEmissionRateEventObject>;

export type UpdateEmissionRateEventFilter = TypedEventFilter<UpdateEmissionRateEvent>;

export interface UpdatePoolEventObject {
  pid: BigNumber;
  lastRewardTimestamp: BigNumber;
  lpSupply: BigNumber;
  accJoePerShare: BigNumber;
}
export type UpdatePoolEvent = TypedEvent<[BigNumber, BigNumber, BigNumber, BigNumber], UpdatePoolEventObject>;

export type UpdatePoolEventFilter = TypedEventFilter<UpdatePoolEvent>;

export interface WithdrawEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface TraderJoeChefV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TraderJoeChefV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    dev(_devAddr: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    devAddr(overrides?: CallOverrides): Promise<[string]>;

    devPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    investorAddr(overrides?: CallOverrides): Promise<[string]>;

    investorPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    joe(overrides?: CallOverrides): Promise<[string]>;

    joePerSec(overrides?: CallOverrides): Promise<[BigNumber]>;

    massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingTokens(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, string, string, BigNumber] & {
        pendingJoe: BigNumber;
        bonusTokenAddress: string;
        bonusTokenSymbol: string;
        pendingBonusToken: BigNumber;
      }
    >;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, string] & {
        lpToken: string;
        allocPoint: BigNumber;
        lastRewardTimestamp: BigNumber;
        accJoePerShare: BigNumber;
        rewarder: string;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    rewarderBonusTokenInfo(
      _pid: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string, string] & { bonusTokenAddress: string; bonusTokenSymbol: string }>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setDevPercent(
      _newDevPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setInvestorAddr(
      _investorAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setInvestorPercent(
      _newInvestorPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setTreasuryAddr(
      _treasuryAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setTreasuryPercent(
      _newTreasuryPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    startTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    treasuryAddr(overrides?: CallOverrides): Promise<[string]>;

    treasuryPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateEmissionRate(
      _joePerSec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  add(
    _allocPoint: BigNumberish,
    _lpToken: string,
    _rewarder: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  dev(_devAddr: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  devAddr(overrides?: CallOverrides): Promise<string>;

  devPercent(overrides?: CallOverrides): Promise<BigNumber>;

  emergencyWithdraw(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  investorAddr(overrides?: CallOverrides): Promise<string>;

  investorPercent(overrides?: CallOverrides): Promise<BigNumber>;

  joe(overrides?: CallOverrides): Promise<string>;

  joePerSec(overrides?: CallOverrides): Promise<BigNumber>;

  massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingTokens(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, string, string, BigNumber] & {
      pendingJoe: BigNumber;
      bonusTokenAddress: string;
      bonusTokenSymbol: string;
      pendingBonusToken: BigNumber;
    }
  >;

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, string] & {
      lpToken: string;
      allocPoint: BigNumber;
      lastRewardTimestamp: BigNumber;
      accJoePerShare: BigNumber;
      rewarder: string;
    }
  >;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  rewarderBonusTokenInfo(
    _pid: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<[string, string] & { bonusTokenAddress: string; bonusTokenSymbol: string }>;

  set(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _rewarder: string,
    overwrite: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setDevPercent(
    _newDevPercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setInvestorAddr(
    _investorAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setInvestorPercent(
    _newInvestorPercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setTreasuryAddr(
    _treasuryAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setTreasuryPercent(
    _newTreasuryPercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  treasuryAddr(overrides?: CallOverrides): Promise<string>;

  treasuryPercent(overrides?: CallOverrides): Promise<BigNumber>;

  updateEmissionRate(
    _joePerSec: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updatePool(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

  withdraw(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    add(_allocPoint: BigNumberish, _lpToken: string, _rewarder: string, overrides?: CallOverrides): Promise<void>;

    deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    dev(_devAddr: string, overrides?: CallOverrides): Promise<void>;

    devAddr(overrides?: CallOverrides): Promise<string>;

    devPercent(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyWithdraw(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    investorAddr(overrides?: CallOverrides): Promise<string>;

    investorPercent(overrides?: CallOverrides): Promise<BigNumber>;

    joe(overrides?: CallOverrides): Promise<string>;

    joePerSec(overrides?: CallOverrides): Promise<BigNumber>;

    massUpdatePools(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingTokens(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, string, string, BigNumber] & {
        pendingJoe: BigNumber;
        bonusTokenAddress: string;
        bonusTokenSymbol: string;
        pendingBonusToken: BigNumber;
      }
    >;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, string] & {
        lpToken: string;
        allocPoint: BigNumber;
        lastRewardTimestamp: BigNumber;
        accJoePerShare: BigNumber;
        rewarder: string;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewarderBonusTokenInfo(
      _pid: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string, string] & { bonusTokenAddress: string; bonusTokenSymbol: string }>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    setDevPercent(_newDevPercent: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setInvestorAddr(_investorAddr: string, overrides?: CallOverrides): Promise<void>;

    setInvestorPercent(_newInvestorPercent: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setTreasuryAddr(_treasuryAddr: string, overrides?: CallOverrides): Promise<void>;

    setTreasuryPercent(_newTreasuryPercent: BigNumberish, overrides?: CallOverrides): Promise<void>;

    startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    treasuryAddr(overrides?: CallOverrides): Promise<string>;

    treasuryPercent(overrides?: CallOverrides): Promise<BigNumber>;

    updateEmissionRate(_joePerSec: BigNumberish, overrides?: CallOverrides): Promise<void>;

    updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

    withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Add(uint256,uint256,address,address)'(
      pid?: BigNumberish | null,
      allocPoint?: null,
      lpToken?: string | null,
      rewarder?: string | null,
    ): AddEventFilter;
    Add(
      pid?: BigNumberish | null,
      allocPoint?: null,
      lpToken?: string | null,
      rewarder?: string | null,
    ): AddEventFilter;

    'Deposit(address,uint256,uint256)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
    ): DepositEventFilter;
    Deposit(user?: string | null, pid?: BigNumberish | null, amount?: null): DepositEventFilter;

    'EmergencyWithdraw(address,uint256,uint256)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(user?: string | null, pid?: BigNumberish | null, amount?: null): EmergencyWithdrawEventFilter;

    'Harvest(address,uint256,uint256)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
    ): HarvestEventFilter;
    Harvest(user?: string | null, pid?: BigNumberish | null, amount?: null): HarvestEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    'Set(uint256,uint256,address,bool)'(
      pid?: BigNumberish | null,
      allocPoint?: null,
      rewarder?: string | null,
      overwrite?: null,
    ): SetEventFilter;
    Set(pid?: BigNumberish | null, allocPoint?: null, rewarder?: string | null, overwrite?: null): SetEventFilter;

    'SetDevAddress(address,address)'(oldAddress?: string | null, newAddress?: string | null): SetDevAddressEventFilter;
    SetDevAddress(oldAddress?: string | null, newAddress?: string | null): SetDevAddressEventFilter;

    'UpdateEmissionRate(address,uint256)'(user?: string | null, _joePerSec?: null): UpdateEmissionRateEventFilter;
    UpdateEmissionRate(user?: string | null, _joePerSec?: null): UpdateEmissionRateEventFilter;

    'UpdatePool(uint256,uint256,uint256,uint256)'(
      pid?: BigNumberish | null,
      lastRewardTimestamp?: null,
      lpSupply?: null,
      accJoePerShare?: null,
    ): UpdatePoolEventFilter;
    UpdatePool(
      pid?: BigNumberish | null,
      lastRewardTimestamp?: null,
      lpSupply?: null,
      accJoePerShare?: null,
    ): UpdatePoolEventFilter;

    'Withdraw(address,uint256,uint256)'(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null,
    ): WithdrawEventFilter;
    Withdraw(user?: string | null, pid?: BigNumberish | null, amount?: null): WithdrawEventFilter;
  };

  estimateGas: {
    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    dev(_devAddr: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    devAddr(overrides?: CallOverrides): Promise<BigNumber>;

    devPercent(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    investorAddr(overrides?: CallOverrides): Promise<BigNumber>;

    investorPercent(overrides?: CallOverrides): Promise<BigNumber>;

    joe(overrides?: CallOverrides): Promise<BigNumber>;

    joePerSec(overrides?: CallOverrides): Promise<BigNumber>;

    massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingTokens(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    rewarderBonusTokenInfo(_pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setDevPercent(
      _newDevPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setInvestorAddr(
      _investorAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setInvestorPercent(
      _newInvestorPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setTreasuryAddr(
      _treasuryAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setTreasuryPercent(
      _newTreasuryPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    treasuryAddr(overrides?: CallOverrides): Promise<BigNumber>;

    treasuryPercent(overrides?: CallOverrides): Promise<BigNumber>;

    updateEmissionRate(
      _joePerSec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updatePool(_pid: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _rewarder: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    dev(_devAddr: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    devAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    devPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    investorAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    investorPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    joe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    joePerSec(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingTokens(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    rewarderBonusTokenInfo(_pid: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _rewarder: string,
      overwrite: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setDevPercent(
      _newDevPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setInvestorAddr(
      _investorAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setInvestorPercent(
      _newInvestorPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setTreasuryAddr(
      _treasuryAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setTreasuryPercent(
      _newTreasuryPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    startTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    treasuryAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasuryPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateEmissionRate(
      _joePerSec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}