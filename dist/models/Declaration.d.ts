import mongoose, { Document } from 'mongoose';
export interface IDeclaration extends Document {
    userId: mongoose.Types.ObjectId;
    date: string;
    amount: number;
    payment: number;
    isPaid: boolean;
    paidAt?: Date;
    movedToHistory?: boolean;
}
export declare const Declaration: mongoose.Model<IDeclaration, {}, {}, {}, mongoose.Document<unknown, {}, IDeclaration> & IDeclaration & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
