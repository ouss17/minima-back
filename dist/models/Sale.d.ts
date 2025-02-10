import mongoose, { Document } from 'mongoose';
export interface ISale extends Document {
    userId: mongoose.Types.ObjectId;
    product: string;
    quantity: number;
    salePrice: number;
    unitCost: number;
    paymentStatus: 'En attente' | 'Effectué' | 'Annulé';
    date: Date;
    margin: number;
    decStatus: number;
}
declare const Sale: mongoose.Model<ISale, {}, {}, {}, mongoose.Document<unknown, {}, ISale> & ISale & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export { Sale };
