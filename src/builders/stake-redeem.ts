import { Interfaces, Transactions, Utils } from '@arkecosystem/crypto';

import { StakeRedeemTransaction } from '../transactions/stake-redeem';

export class StakeRedeemBuilder extends Transactions.TransactionBuilder<StakeRedeemBuilder> {
    constructor() {
        super();
        this.data.version = 2;
        this.data.typeGroup = 100;
        this.data.type = 2;
        this.data.fee = StakeRedeemTransaction.staticFee();;
        this.data.amount = Utils.BigNumber.ZERO;
        this.data.asset = { stakeRedeem: { txId: "" } };
        this.signWithSenderAsRecipient = true;
    }

    public stakeAsset(txId: string): StakeRedeemBuilder {
        this.data.asset.stakeRedeem.txId = txId;
        return this;
    }

    public getStruct(): Interfaces.ITransactionData {
        const struct: Interfaces.ITransactionData = super.getStruct();
        struct.amount = this.data.amount;
        struct.asset = this.data.asset;
        return struct;
    }

    protected instance(): StakeRedeemBuilder {
        return this;
    }
}