"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
const Stock_1 = require("../models/Stock");
class StockService {
    static async getAll(userId) {
        return await Stock_1.Stock.find({ userId }).sort({ createdAt: -1 });
    }
    static async create(stockData, userId) {
        const stock = new Stock_1.Stock({
            ...stockData,
            userId
        });
        return await stock.save();
    }
    static async update(id, stockData, userId) {
        return await Stock_1.Stock.findOneAndUpdate({ _id: id, userId }, stockData, { new: true });
    }
    static async delete(id, userId) {
        return await Stock_1.Stock.findOneAndDelete({ _id: id, userId });
    }
    static async getLowStock(userId) {
        return await Stock_1.Stock.find({
            userId,
            $expr: {
                $lte: ["$quantity", "$threshold"]
            }
        });
    }
    static async getAnalytics(userId) {
        var _a;
        const totalItems = await Stock_1.Stock.countDocuments({ userId });
        const totalValue = await Stock_1.Stock.aggregate([
            { $match: { userId } },
            { $group: { _id: null, total: { $sum: { $multiply: ["$quantity", "$unitPrice"] } } } }
        ]);
        const lowStockItems = await Stock_1.Stock.countDocuments({ userId, $expr: { $lte: ["$quantity", "$threshold"] } });
        return {
            totalItems,
            totalValue: ((_a = totalValue[0]) === null || _a === void 0 ? void 0 : _a.total) || 0,
            lowStockItems
        };
    }
}
exports.StockService = StockService;
//# sourceMappingURL=stockService.js.map