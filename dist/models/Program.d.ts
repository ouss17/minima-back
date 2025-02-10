import mongoose, { Document } from 'mongoose';
export interface IProgram extends Document {
    userId: mongoose.Types.ObjectId;
    days: Array<{
        day: string;
        exercises: Array<{
            name: string;
            xp: number;
        }>;
    }>;
    createdAt: Date;
}
export declare const Program: mongoose.Model<IProgram, {}, {}, {}, mongoose.Document<unknown, {}, IProgram> & IProgram & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
