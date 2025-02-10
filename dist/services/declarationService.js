"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclarationService = void 0;
const Sale_1 = require("../models/Sale");
class DeclarationService {
    static async updateStatus(id) {
        // Split l'ID en année et mois
        const [year, month] = id.split('-');
        // Crée une requête pour matcher les dates dans le mois/année
        const updatedSales = await Sale_1.Sale.updateMany({
            $expr: {
                $and: [
                    { $eq: [{ $year: "$date" }, parseInt(year)] },
                    { $eq: [{ $month: "$date" }, parseInt(month)] }
                ]
            }
        }, { decStatus: 2 });
        return updatedSales;
    }
}
exports.DeclarationService = DeclarationService;
//# sourceMappingURL=declarationService.js.map