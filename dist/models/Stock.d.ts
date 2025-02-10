import mongoose, { Document } from 'mongoose';
export interface IStock extends Document {
    userId: mongoose.Types.ObjectId;
    reference: string;
    name: string;
    category: string;
    quantity: number;
    minQuantity: number;
    unitPrice: number;
    salePrice: number;
    threshold: number;
    price?: number;
    description?: string;
}
export declare const Stock: mongoose.Model<IStock, {}, {}, {}, mongoose.Document<unknown, {}, IStock> & IStock & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
