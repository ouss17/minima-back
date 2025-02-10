import mongoose, { Document } from 'mongoose';
export interface IProduct extends Document {
    userId: mongoose.Types.ObjectId;
    name: string;
    category: string;
    description: string;
    costPrice: number;
    salePrice: number;
    status: 'draft' | 'in-progress' | 'validated' | 'rejected';
    totalScore: number;
    tags: string[];
    link: string;
    price: number;
    margin: number;
    effect: number;
    problem: number;
    images: number;
    videos: number;
    competition: number;
    season: number;
}
export declare const Product: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct> & IProduct & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
