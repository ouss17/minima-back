"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
// routes/productRoutes.ts
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const productService_1 = require("../services/productService");
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
productRouter.use(auth_1.auth);
productRouter.get('/', async (req, res) => {
    try {
        const products = await productService_1.ProductService.getAll(req.user.userId);
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
productRouter.post('/', async (req, res) => {
    try {
        const product = await productService_1.ProductService.create(req.body, req.user.userId);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
productRouter.put('/:id', async (req, res) => {
    try {
        const product = await productService_1.ProductService.update(req.params.id, req.body, req.user.userId);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json(product);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
productRouter.delete('/:id', async (req, res) => {
    try {
        const product = await productService_1.ProductService.delete(req.params.id, req.user.userId);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json({ message: 'Product successfully deleted' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//# sourceMappingURL=productRoutes.js.map