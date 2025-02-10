export declare class MarketingService {
    static getAll(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/MarketingCampaign").IMarketingCampaign> & import("../models/MarketingCampaign").IMarketingCampaign & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    static create(campaignData: any, userId: string): Promise<import("mongoose").Document<unknown, {}, import("../models/MarketingCampaign").IMarketingCampaign> & import("../models/MarketingCampaign").IMarketingCampaign & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    static update(id: string, campaignData: any, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/MarketingCampaign").IMarketingCampaign> & import("../models/MarketingCampaign").IMarketingCampaign & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    static delete(id: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/MarketingCampaign").IMarketingCampaign> & import("../models/MarketingCampaign").IMarketingCampaign & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
