import mongoose, { Document } from 'mongoose';
export interface IMarketingCampaign extends Document {
    userId: mongoose.Types.ObjectId;
    name: string;
    type: string;
    script?: string;
    hashtags: string;
    isAd: boolean;
    adBudget?: number;
    adDuration?: string;
    postDate?: string;
    postTime?: string;
    platform: string;
    content?: string;
    objective?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const MarketingCampaign: mongoose.Model<IMarketingCampaign, {}, {}, {}, mongoose.Document<unknown, {}, IMarketingCampaign> & IMarketingCampaign & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
