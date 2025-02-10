"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketingRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const marketingService_1 = require("../services/marketingService");
exports.marketingRouter = (0, express_1.Router)();
exports.marketingRouter.use(auth_1.auth);
exports.marketingRouter.get('/', async (req, res) => {
    try {
        const campaigns = await marketingService_1.MarketingService.getAll(req.user.userId);
        res.json(campaigns);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.marketingRouter.post('/', async (req, res) => {
    try {
        const campaign = await marketingService_1.MarketingService.create(req.body, req.user.userId);
        res.status(201).json(campaign);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.marketingRouter.put('/:id', async (req, res) => {
    try {
        const campaign = await marketingService_1.MarketingService.update(req.params.id, req.body, req.user.userId);
        if (!campaign) {
            res.status(404).json({ error: 'Campaign not found' });
            return;
        }
        res.json(campaign);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.marketingRouter.delete('/:id', async (req, res) => {
    try {
        const campaign = await marketingService_1.MarketingService.delete(req.params.id, req.user.userId);
        if (!campaign) {
            res.status(404).json({ error: 'Campaign not found' });
            return;
        }
        res.json({ message: 'Campaign successfully deleted' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//# sourceMappingURL=marketingRoutes.js.map