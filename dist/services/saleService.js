"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleService = void 0;
const Sale_1 = require("../models/Sale");
class SaleService {
    static async getAll(userId) {
        return await Sale_1.Sale.find({ userId }).sort({ date: -1 });
    }
    static async create(saleData, userId) {
        try {
            const sale = new Sale_1.Sale({
                userId,
                product: saleData.product,
                quantity: saleData.quantity,
                salePrice: saleData.salePrice,
                unitCost: saleData.unitCost,
                paymentStatus: saleData.paymentStatus,
                date: saleData.date || new Date(),
                margin: (saleData.salePrice - saleData.unitCost) * saleData.quantity,
                decStatus: 1
            });
            const savedSale = await sale.save();
            return savedSale;
        }
        catch (error) {
            console.error('Error in SaleService.create:', error);
            throw error;
        }
    }
    static async update(id, saleData, userId) {
        try {
            const updatedData = {
                ...saleData,
                margin: (saleData.salePrice - saleData.unitCost) * saleData.quantity
            };
            const updatedSale = await Sale_1.Sale.findOneAndUpdate({ _id: id, userId }, updatedData, { new: true, runValidators: true });
            return updatedSale;
        }
        catch (error) {
            console.error('Error in SaleService.update:', error);
            throw error;
        }
    }
    static async updateDecStatus(id, userId) {
        try {
            const updatedSale = await Sale_1.Sale.findOneAndUpdate({ _id: id, userId }, { decStatus: 2 }, { new: true });
            return updatedSale;
        }
        catch (error) {
            console.error('Error in SaleService.updateDecStatus:', error);
            throw error;
        }
    }
    static async delete(id, userId) {
        return await Sale_1.Sale.findOneAndDelete({ _id: id, userId });
    }
}
exports.SaleService = SaleService;
//# sourceMappingURL=saleService.js.map