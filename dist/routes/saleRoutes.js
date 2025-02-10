"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const saleService_1 = require("../services/saleService");
exports.saleRouter = (0, express_1.Router)();
exports.saleRouter.use(auth_1.auth);
exports.saleRouter.get('/', async (req, res) => {
    try {
        const sales = await saleService_1.SaleService.getAll(req.user.userId);
        res.json(sales);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.saleRouter.post('/', async (req, res) => {
    try {
        const sale = await saleService_1.SaleService.create(req.body, req.user.userId);
        res.status(201).json(sale);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.saleRouter.put('/:id', async (req, res) => {
    try {
        const sale = await saleService_1.SaleService.update(req.params.id, req.body, req.user.userId);
        if (!sale) {
            res.status(404).json({ error: 'Sale not found' });
            return;
        }
        res.json(sale);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.saleRouter.patch('/:id/decstatus', async (req, res) => {
    try {
        const sale = await saleService_1.SaleService.updateDecStatus(req.params.id, req.user.userId);
        if (!sale) {
            res.status(404).json({ error: 'Sale not found' });
            return;
        }
        res.json(sale);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.saleRouter.delete('/:id', async (req, res) => {
    try {
        const sale = await saleService_1.SaleService.delete(req.params.id, req.user.userId);
        if (!sale) {
            res.status(404).json({ error: 'Sale not found' });
            return;
        }
        res.json({ message: 'Sale successfully deleted' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//# sourceMappingURL=saleRoutes.js.map