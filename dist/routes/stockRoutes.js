"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const stockService_1 = require("../services/stockService");
const stockRouter = (0, express_1.Router)();
exports.stockRouter = stockRouter;
// Middleware d'authentification
stockRouter.use(auth_1.auth);
// Récupérer tous les stocks
stockRouter.get('/', async (req, res) => {
    try {
        const stocks = await stockService_1.StockService.getAll(req.user.userId);
        res.json(stocks);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Créer un nouveau stock
stockRouter.post('/', async (req, res) => {
    try {
        const { name, reference, category, quantity, minQuantity, unitPrice, salePrice, threshold, price, description } = req.body;
        if (!name || !reference || !category || typeof quantity !== 'number' || typeof minQuantity !== 'number' || typeof unitPrice !== 'number' || typeof salePrice !== 'number' || typeof threshold !== 'number') {
            res.status(400).json({ error: 'Invalid data' });
            return;
        }
        const stock = await stockService_1.StockService.create({ name, reference, category, quantity, minQuantity, unitPrice, salePrice, threshold, price, description }, req.user.userId);
        res.status(201).json(stock);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// Mettre à jour un stock existant
stockRouter.put('/:id', async (req, res) => {
    try {
        const { name, reference, category, quantity, minQuantity, unitPrice, salePrice, threshold, price, description } = req.body;
        if (!name || !reference || !category || typeof quantity !== 'number' || typeof minQuantity !== 'number' || typeof unitPrice !== 'number' || typeof salePrice !== 'number' || typeof threshold !== 'number') {
            res.status(400).json({ error: 'Invalid data' });
            return;
        }
        const stock = await stockService_1.StockService.update(req.params.id, { name, reference, category, quantity, minQuantity, unitPrice, salePrice, threshold, price, description }, req.user.userId);
        if (!stock) {
            res.status(404).json({ error: 'Stock not found' });
            return;
        }
        res.json(stock);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// Supprimer un stock
stockRouter.delete('/:id', async (req, res) => {
    try {
        const stock = await stockService_1.StockService.delete(req.params.id, req.user.userId);
        if (!stock) {
            res.status(404).json({ error: 'Stock not found' });
            return;
        }
        res.json({ message: 'Stock successfully deleted' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Récupérer les stocks faibles
stockRouter.get('/low-stock', async (req, res) => {
    try {
        const lowStock = await stockService_1.StockService.getLowStock(req.user.userId);
        res.json(lowStock);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Récupérer les données analytiques
stockRouter.get('/analytics', async (req, res) => {
    try {
        const analytics = await stockService_1.StockService.getAnalytics(req.user.userId);
        res.json(analytics);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//# sourceMappingURL=stockRoutes.js.map