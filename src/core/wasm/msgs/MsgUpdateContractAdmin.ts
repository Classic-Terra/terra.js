import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@terra-money/terra.proto/google/protobuf/any';
import { MsgUpdateContractAdmin as MsgUpdateContractAdmin_legacy_pb } from '@classic-terra/terra.proto/terra/wasm/v1beta1/tx';
import { MsgUpdateAdmin as MsgUpdateAdmin_pb } from '@terra-money/terra.proto/cosmwasm/wasm/v1/tx';

export class MsgUpdateContractAdmin extends JSONSerializable<
  MsgUpdateContractAdmin.Amino,
  MsgUpdateContractAdmin.Data,
  MsgUpdateContractAdmin.Proto
> {
  /**
   * @param admin contract admin
   * @param new_admin new admin
   * @param contract contract address
   */
  constructor(
    public admin: AccAddress,
    public new_admin: AccAddress,
    public contract: AccAddress
  ) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static fromAmino(data: MsgUpdateContractAdmin.Amino, _?: boolean) {
    const {
      value: { sender, new_admin, contract },
    } = data as MsgUpdateContractAdmin.AminoV2;
    return new MsgUpdateContractAdmin(sender, new_admin, contract);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toAmino(_?: boolean): MsgUpdateContractAdmin.Amino {
    const { admin, new_admin, contract } = this;
    return {
      type: 'wasm/MsgUpdateAdmin',
      value: {
        sender: admin,
        new_admin,
        contract,
      },
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static fromProto(proto: MsgUpdateContractAdmin.Proto, _?: boolean) {
    const p = proto as MsgUpdateAdmin_pb;
    return new MsgUpdateContractAdmin(p.sender, p.newAdmin, p.contract);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toProto(_?: boolean): MsgUpdateContractAdmin.Proto {
    const { admin, new_admin, contract } = this;
    return MsgUpdateAdmin_pb.fromPartial({
      sender: admin,
      contract,
      newAdmin: new_admin,
    });
  }

  public packAny(isClassic?: boolean): Any {
    return Any.fromPartial({
      typeUrl: '/cosmwasm.wasm.v1.MsgUpdateAdmin',
      value: MsgUpdateAdmin_pb.encode(
        this.toProto(isClassic) as MsgUpdateAdmin_pb
      ).finish(),
    });
  }

  public static unpackAny(msgAny: Any, isClassic?: boolean) {
    return MsgUpdateContractAdmin.fromProto(
      MsgUpdateAdmin_pb.decode(msgAny.value),
      isClassic
    );
  }

  public static fromData(
    data: MsgUpdateContractAdmin.Data,
    isClassic?: boolean
  ) {
    if (isClassic) {
      const { admin, new_admin, contract } =
        data as MsgUpdateContractAdmin.DataV1;
      return new MsgUpdateContractAdmin(admin, new_admin, contract);
    } else {
      const { sender, new_admin, contract } =
        data as MsgUpdateContractAdmin.DataV2;
      return new MsgUpdateContractAdmin(sender, new_admin, contract);
    }
  }

  public toData(isClassic?: boolean): MsgUpdateContractAdmin.Data {
    const { admin, new_admin, contract } = this;
    if (isClassic) {
      return {
        '@type': '/terra.wasm.v1beta1.MsgUpdateContractAdmin',
        admin,
        new_admin,
        contract,
      };
    } else {
      return {
        '@type': '/cosmwasm.wasm.v1.MsgUpdateAdmin',
        sender: admin,
        new_admin,
        contract,
      };
    }
  }
}

export namespace MsgUpdateContractAdmin {
  export interface AminoV1 {
    type: 'wasm/MsgUpdateContractAdmin';
    value: {
      admin: AccAddress;
      new_admin: AccAddress;
      contract: AccAddress;
    };
  }

  export interface AminoV2 {
    type: 'wasm/MsgUpdateAdmin';
    value: {
      sender: AccAddress;
      new_admin: AccAddress;
      contract: AccAddress;
    };
  }

  export interface DataV1 {
    '@type': '/terra.wasm.v1beta1.MsgUpdateContractAdmin';
    admin: AccAddress;
    new_admin: AccAddress;
    contract: AccAddress;
  }

  export interface DataV2 {
    '@type': '/cosmwasm.wasm.v1.MsgUpdateAdmin';
    sender: AccAddress;
    new_admin: AccAddress;
    contract: AccAddress;
  }

  export type Amino = AminoV1 | AminoV2;
  export type Data = DataV1 | DataV2;
  export type Proto = MsgUpdateContractAdmin_legacy_pb | MsgUpdateAdmin_pb;
}
