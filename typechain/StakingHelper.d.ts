/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface StakingHelperInterface extends ethers.utils.Interface {
  functions: {
    "Auxl()": FunctionFragment;
    "stake(uint256,address)": FunctionFragment;
    "staking()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "Auxl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "staking", values?: undefined): string;

  decodeFunctionResult(functionFragment: "Auxl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "staking", data: BytesLike): Result;

  events: {
    "LogStake(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogStake"): EventFragment;
}

export type LogStakeEvent = TypedEvent<
  [string, BigNumber] & { recipient: string; amount: BigNumber }
>;

export class StakingHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: StakingHelperInterface;

  functions: {
    Auxl(overrides?: CallOverrides): Promise<[string]>;

    stake(
      _amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    staking(overrides?: CallOverrides): Promise<[string]>;
  };

  Auxl(overrides?: CallOverrides): Promise<string>;

  stake(
    _amount: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  staking(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    Auxl(overrides?: CallOverrides): Promise<string>;

    stake(
      _amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    staking(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "LogStake(address,uint256)"(
      recipient?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { recipient: string; amount: BigNumber }
    >;

    LogStake(
      recipient?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { recipient: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    Auxl(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    staking(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    Auxl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    staking(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
