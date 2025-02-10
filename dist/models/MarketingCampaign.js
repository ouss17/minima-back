"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingCampaign = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const marketingCampaignSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    script: {
        type: String
    },
    hashtags: {
        type: String,
        required: true
    },
    isAd: {
        type: Boolean,
        required: true
    },
    adBudget: {
        type: Number
    },
    adDuration: {
        type: String
    },
    postDate: {
        type: String
    },
    postTime: {
        type: String
    },
    platform: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    objective: {
        type: String
    }
}, {
    timestamps: true, // This will automatically add `createdAt` and `updatedAt` fields
    collection: 'marketing' // Name of the collection in MongoDB
});
exports.MarketingCampaign = mongoose_1.default.model('MarketingCampaign', marketingCampaignSchema);
//# sourceMappingURL=MarketingCampaign.js.map