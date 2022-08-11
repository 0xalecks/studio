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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface PlutusRewardsDistroPlsDpxV2Interface extends utils.Interface {
  functions: {
    'FEE_CLAIMER()': FunctionFragment;
    'dpx()': FunctionFragment;
    'getEmissions()': FunctionFragment;
    'harvest()': FunctionFragment;
    'initialize()': FunctionFragment;
    'owner()': FunctionFragment;
    'pls()': FunctionFragment;
    'plsDpx()': FunctionFragment;
    'plsDpxPerSecond()': FunctionFragment;
    'plsJones()': FunctionFragment;
    'plsJonesPerSecond()': FunctionFragment;
    'plsPerSecond()': FunctionFragment;
    'plutusChef()': FunctionFragment;
    'proxiableUUID()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'retrieve(address)': FunctionFragment;
    'rewardsController()': FunctionFragment;
    'sendRewards(address,uint128,uint128,uint128,uint128)': FunctionFragment;
    'setPlutusChef(address)': FunctionFragment;
    'setRewardsController(address)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updatePlsDpxEmissions(uint80)': FunctionFragment;
    'updatePlsEmission(uint80)': FunctionFragment;
    'updatePlsJonesEmissions(uint80)': FunctionFragment;
    'upgradeTo(address)': FunctionFragment;
    'upgradeToAndCall(address,bytes)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'FEE_CLAIMER'
      | 'dpx'
      | 'getEmissions'
      | 'harvest'
      | 'initialize'
      | 'owner'
      | 'pls'
      | 'plsDpx'
      | 'plsDpxPerSecond'
      | 'plsJones'
      | 'plsJonesPerSecond'
      | 'plsPerSecond'
      | 'plutusChef'
      | 'proxiableUUID'
      | 'renounceOwnership'
      | 'retrieve'
      | 'rewardsController'
      | 'sendRewards'
      | 'setPlutusChef'
      | 'setRewardsController'
      | 'transferOwnership'
      | 'updatePlsDpxEmissions'
      | 'updatePlsEmission'
      | 'updatePlsJonesEmissions'
      | 'upgradeTo'
      | 'upgradeToAndCall',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'FEE_CLAIMER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'dpx', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getEmissions', values?: undefined): string;
  encodeFunctionData(functionFragment: 'harvest', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialize', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pls', values?: undefined): string;
  encodeFunctionData(functionFragment: 'plsDpx', values?: undefined): string;
  encodeFunctionData(functionFragment: 'plsDpxPerSecond', values?: undefined): string;
  encodeFunctionData(functionFragment: 'plsJones', values?: undefined): string;
  encodeFunctionData(functionFragment: 'plsJonesPerSecond', values?: undefined): string;
  encodeFunctionData(functionFragment: 'plsPerSecond', values?: undefined): string;
  encodeFunctionData(functionFragment: 'plutusChef', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proxiableUUID', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'retrieve', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'rewardsController', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'sendRewards',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'setPlutusChef', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setRewardsController', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'updatePlsDpxEmissions', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'updatePlsEmission', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'updatePlsJonesEmissions', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'upgradeTo', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'upgradeToAndCall',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>],
  ): string;

  decodeFunctionResult(functionFragment: 'FEE_CLAIMER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'dpx', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getEmissions', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvest', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pls', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'plsDpx', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'plsDpxPerSecond', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'plsJones', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'plsJonesPerSecond', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'plsPerSecond', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'plutusChef', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proxiableUUID', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'retrieve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardsController', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sendRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPlutusChef', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardsController', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePlsDpxEmissions', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePlsEmission', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePlsJonesEmissions', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeToAndCall', data: BytesLike): Result;

  events: {
    'AdminChanged(address,address)': EventFragment;
    'BeaconUpgraded(address)': EventFragment;
    'Initialized(uint8)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Upgraded(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'BeaconUpgraded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Upgraded'): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[string, string], AdminChangedEventObject>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[string], BeaconUpgradedEventObject>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface PlutusRewardsDistroPlsDpxV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PlutusRewardsDistroPlsDpxV2Interface;

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
    FEE_CLAIMER(overrides?: CallOverrides): Promise<[string]>;

    dpx(overrides?: CallOverrides): Promise<[string]>;

    getEmissions(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        pls_: BigNumber;
        plsDpx_: BigNumber;
        plsJones_: BigNumber;
        pendingDpxLessFee_: BigNumber;
      }
    >;

    harvest(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    initialize(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pls(overrides?: CallOverrides): Promise<[string]>;

    plsDpx(overrides?: CallOverrides): Promise<[string]>;

    plsDpxPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    plsJones(overrides?: CallOverrides): Promise<[string]>;

    plsJonesPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    plsPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    plutusChef(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    retrieve(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    rewardsController(overrides?: CallOverrides): Promise<[string]>;

    sendRewards(
      _to: PromiseOrValue<string>,
      _plsAmt: PromiseOrValue<BigNumberish>,
      _plsDpxAmt: PromiseOrValue<BigNumberish>,
      _plsJonesAmt: PromiseOrValue<BigNumberish>,
      _dpxAmt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setPlutusChef(
      _newPlutusChef: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setRewardsController(
      _newController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updatePlsDpxEmissions(
      _newPlsDpxRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updatePlsEmission(
      _newPlsRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updatePlsJonesEmissions(
      _newPlsJonesRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  FEE_CLAIMER(overrides?: CallOverrides): Promise<string>;

  dpx(overrides?: CallOverrides): Promise<string>;

  getEmissions(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      pls_: BigNumber;
      plsDpx_: BigNumber;
      plsJones_: BigNumber;
      pendingDpxLessFee_: BigNumber;
    }
  >;

  harvest(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  initialize(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pls(overrides?: CallOverrides): Promise<string>;

  plsDpx(overrides?: CallOverrides): Promise<string>;

  plsDpxPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  plsJones(overrides?: CallOverrides): Promise<string>;

  plsJonesPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  plsPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  plutusChef(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  retrieve(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  rewardsController(overrides?: CallOverrides): Promise<string>;

  sendRewards(
    _to: PromiseOrValue<string>,
    _plsAmt: PromiseOrValue<BigNumberish>,
    _plsDpxAmt: PromiseOrValue<BigNumberish>,
    _plsJonesAmt: PromiseOrValue<BigNumberish>,
    _dpxAmt: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setPlutusChef(
    _newPlutusChef: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setRewardsController(
    _newController: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updatePlsDpxEmissions(
    _newPlsDpxRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updatePlsEmission(
    _newPlsRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updatePlsJonesEmissions(
    _newPlsJonesRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    FEE_CLAIMER(overrides?: CallOverrides): Promise<string>;

    dpx(overrides?: CallOverrides): Promise<string>;

    getEmissions(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        pls_: BigNumber;
        plsDpx_: BigNumber;
        plsJones_: BigNumber;
        pendingDpxLessFee_: BigNumber;
      }
    >;

    harvest(overrides?: CallOverrides): Promise<void>;

    initialize(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pls(overrides?: CallOverrides): Promise<string>;

    plsDpx(overrides?: CallOverrides): Promise<string>;

    plsDpxPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    plsJones(overrides?: CallOverrides): Promise<string>;

    plsJonesPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    plsPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    plutusChef(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    retrieve(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    rewardsController(overrides?: CallOverrides): Promise<string>;

    sendRewards(
      _to: PromiseOrValue<string>,
      _plsAmt: PromiseOrValue<BigNumberish>,
      _plsDpxAmt: PromiseOrValue<BigNumberish>,
      _plsJonesAmt: PromiseOrValue<BigNumberish>,
      _dpxAmt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setPlutusChef(_newPlutusChef: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setRewardsController(_newController: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    updatePlsDpxEmissions(_newPlsDpxRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    updatePlsEmission(_newPlsRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    updatePlsJonesEmissions(_newPlsJonesRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'AdminChanged(address,address)'(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
    AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;

    'BeaconUpgraded(address)'(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;

    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'Upgraded(address)'(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
  };

  estimateGas: {
    FEE_CLAIMER(overrides?: CallOverrides): Promise<BigNumber>;

    dpx(overrides?: CallOverrides): Promise<BigNumber>;

    getEmissions(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    initialize(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pls(overrides?: CallOverrides): Promise<BigNumber>;

    plsDpx(overrides?: CallOverrides): Promise<BigNumber>;

    plsDpxPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    plsJones(overrides?: CallOverrides): Promise<BigNumber>;

    plsJonesPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    plsPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    plutusChef(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    retrieve(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    rewardsController(overrides?: CallOverrides): Promise<BigNumber>;

    sendRewards(
      _to: PromiseOrValue<string>,
      _plsAmt: PromiseOrValue<BigNumberish>,
      _plsDpxAmt: PromiseOrValue<BigNumberish>,
      _plsJonesAmt: PromiseOrValue<BigNumberish>,
      _dpxAmt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setPlutusChef(
      _newPlutusChef: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setRewardsController(
      _newController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updatePlsDpxEmissions(
      _newPlsDpxRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updatePlsEmission(
      _newPlsRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updatePlsJonesEmissions(
      _newPlsJonesRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FEE_CLAIMER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dpx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEmissions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    harvest(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    initialize(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pls(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    plsDpx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    plsDpxPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    plsJones(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    plsJonesPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    plsPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    plutusChef(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    retrieve(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    rewardsController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendRewards(
      _to: PromiseOrValue<string>,
      _plsAmt: PromiseOrValue<BigNumberish>,
      _plsDpxAmt: PromiseOrValue<BigNumberish>,
      _plsJonesAmt: PromiseOrValue<BigNumberish>,
      _dpxAmt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setPlutusChef(
      _newPlutusChef: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setRewardsController(
      _newController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updatePlsDpxEmissions(
      _newPlsDpxRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updatePlsEmission(
      _newPlsRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updatePlsJonesEmissions(
      _newPlsJonesRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}