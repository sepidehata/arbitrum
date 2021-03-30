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
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface MockInterface extends ethers.utils.Interface {
  functions: {
    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)': FunctionFragment
    'mocked()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'createRetryableTicket',
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(functionFragment: 'mocked', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'createRetryableTicket',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'mocked', data: BytesLike): Result

  events: {}
}

export class Mock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: MockInterface

  functions: {
    createRetryableTicket(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    mocked(overrides?: CallOverrides): Promise<[string]>

    'mocked()'(overrides?: CallOverrides): Promise<[string]>
  }

  createRetryableTicket(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    arg3: string,
    arg4: string,
    arg5: BigNumberish,
    arg6: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    arg3: string,
    arg4: string,
    arg5: BigNumberish,
    arg6: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  mocked(overrides?: CallOverrides): Promise<string>

  'mocked()'(overrides?: CallOverrides): Promise<string>

  callStatic: {
    createRetryableTicket(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    mocked(overrides?: CallOverrides): Promise<string>

    'mocked()'(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    createRetryableTicket(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    mocked(overrides?: CallOverrides): Promise<BigNumber>

    'mocked()'(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    createRetryableTicket(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    mocked(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'mocked()'(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
