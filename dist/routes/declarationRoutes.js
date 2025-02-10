"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarationRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const declarationService_1 = require("../services/declarationService");
// Initialisation du routeur
exports.declarationRouter = (0, express_1.Router)();
// Middleware d'authentification
exports.declarationRouter.use(auth_1.auth);
// Route pour mettre à jour le statut d'une déclaration
exports.declarationRouter.put('/:id/status', async (req, res) => {
    try {
        const { id } = req.params;
        const { isPaid } = req.body;
        // Validation basique
        if (typeof isPaid !== 'boolean') {
            res.status(400).json({
                error: 'isPaid must be a boolean value'
            });
            return;
        }
        // Validation du format de l'ID (YYYY-MM)
        if (!/^\d{4}-\d{2}$/.test(id)) {
            res.status(400).json({
                error: 'Invalid declaration ID format. Expected YYYY-MM'
            });
            return;
        }
        const updatedSales = await declarationService_1.DeclarationService.updateStatus(id);
        if (!updatedSales) {
            res.status(404).send({ error: 'Sales not found for the given declaration date' });
            return;
        }
        res.status(200).json(updatedSales);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
//# sourceMappingURL=declarationRoutes.js.map