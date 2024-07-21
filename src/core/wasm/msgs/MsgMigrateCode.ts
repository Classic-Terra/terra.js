import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@terra-money/terra.proto/google/protobuf/any';
import { MsgMigrateCode as MsgMigrateCode_legacy_pb } from '@classic-terra/terra.proto/terra/wasm/v1beta1/tx';

export class MsgMigrateCode extends JSONSerializable<
  MsgMigrateCode.Amino,
  MsgMigrateCode.Data,
  MsgMigrateCode.Proto
> {
  /**
   * @param sender code migrator address
   * @param code_id reference to the code on the blockchain
   * @param wasm_byte_code base64-encoded bytecode contents
   */
  constructor(
    public sender: AccAddress,
    public code_id: number,
    public wasm_byte_code: string
  ) {
    super();
  }

  public static fromAmino(
    _data: MsgMigrateCode.Amino,
    _?: boolean
  ): MsgMigrateCode {
    _data;
    _;
    throw new Error('Not supported for the network');
  }

  public toAmino(_?: boolean): MsgMigrateCode.Amino {
    _;
    throw new Error('Not supported for the network');
  }

  public static fromProto(
    _proto: MsgMigrateCode.Proto,
    _?: boolean
  ): MsgMigrateCode {
    _proto;
    _;
    throw new Error('Not supported for the network');
  }

  public toProto(_?: boolean): MsgMigrateCode.Proto {
    _;
    throw new Error('Not supported for the network');
  }

  public packAny(_?: boolean): Any {
    _;
    throw new Error('Not supported for the network');
  }

  public static unpackAny(_msgAny: Any, _?: boolean): MsgMigrateCode {
    _msgAny;
    _;
    throw new Error('Not supported for the network');
  }

  public static fromData(
    _data: MsgMigrateCode.Data,
    _?: boolean
  ): MsgMigrateCode {
    _data;
    _;
    throw new Error('Not supported for the network');
  }

  public toData(_?: boolean): MsgMigrateCode.Data {
    _;
    throw new Error('Not supported for the network');
  }
}

export namespace MsgMigrateCode {
  export interface Amino {
    type: 'wasm/MsgMigrateCode';
    value: {
      code_id: string;
      sender: AccAddress;
      wasm_byte_code: string;
    };
  }

  export interface Data {
    '@type': '/terra.wasm.v1beta1.MsgMigrateCode';
    code_id: string;
    sender: AccAddress;
    wasm_byte_code: string;
  }

  export type Proto = MsgMigrateCode_legacy_pb;
}
