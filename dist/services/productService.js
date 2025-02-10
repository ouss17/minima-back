"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
// services/productService.ts
const Product_1 = require("../models/Product");
class ProductService {
    static async getAll(userId) {
        return await Product_1.Product.find({ userId }).sort({ createdAt: -1 });
    }
    static async create(productData, userId) {
        try {
            const product = new Product_1.Product({
                userId,
                ...productData
            });
            const savedProduct = await product.save();
            console.log('Product saved:', savedProduct);
            return savedProduct;
        }
        catch (error) {
            console.error('Error in ProductService.create:', error);
            throw error;
        }
    }
    static async update(id, productData, userId) {
        try {
            const product = await Product_1.Product.findOneAndUpdate({ _id: id, userId }, productData, { new: true });
            return product;
        }
        catch (error) {
            console.error(`Error updating product with id: ${id}`, error);
            throw error;
        }
    }
    static async delete(id, userId) {
        try {
            const product = await Product_1.Product.findOneAndDelete({ _id: id, userId });
            return product;
        }
        catch (error) {
            console.error(`Error deleting product with id: ${id}`, error);
            throw error;
        }
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=productService.js.map