"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingService = void 0;
const MarketingCampaign_1 = require("../models/MarketingCampaign");
class MarketingService {
    static async getAll(userId) {
        return await MarketingCampaign_1.MarketingCampaign.find({ userId }).sort({ postDate: -1 });
    }
    static async create(campaignData, userId) {
        try {
            const campaign = new MarketingCampaign_1.MarketingCampaign({
                userId,
                ...campaignData
            });
            return await campaign.save();
        }
        catch (error) {
            console.error('Error in MarketingService.create:', error);
            throw error;
        }
    }
    static async update(id, campaignData, userId) {
        try {
            return await MarketingCampaign_1.MarketingCampaign.findOneAndUpdate({ _id: id, userId }, campaignData, { new: true });
        }
        catch (error) {
            console.error('Error in MarketingService.update:', error);
            throw error;
        }
    }
    static async delete(id, userId) {
        return await MarketingCampaign_1.MarketingCampaign.findOneAndDelete({ _id: id, userId });
    }
}
exports.MarketingService = MarketingService;
//# sourceMappingURL=marketingService.js.map