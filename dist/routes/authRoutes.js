"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const authService_1 = require("../services/authService");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
// Middleware pour le débogage
authRouter.use((req, _res, next) => {
    console.log(`Requête Auth : ${req.method} ${req.url}`);
    console.log('En-têtes :', req.headers);
    console.log('Corps de la requête :', req.body);
    next();
});
// Route pour la connexion (login)
authRouter.post('/login', (req, res, next) => {
    (async () => {
        try {
            const { email, password } = req.body;
            // Validation des champs
            if (!email || !password) {
                return res.status(400).json({
                    error: 'L\'email et le mot de passe sont requis'
                });
            }
            // Appel à la méthode login du service AuthService
            const result = await authService_1.AuthService.login(email, password);
            return res.status(200).json(result);
        }
        catch (error) {
            console.error('Erreur lors de la connexion :', error);
            return res.status(401).json({
                error: error instanceof Error ? error.message : 'Échec de l\'authentification'
            });
        }
    })().catch(next);
});
// Route pour l'inscription (register)
authRouter.post('/register', (req, res, next) => {
    (async () => {
        try {
            const { email, password } = req.body;
            // Validation des champs
            if (!email || !password) {
                return res.status(400).json({
                    error: 'L\'email et le mot de passe sont requis'
                });
            }
            // Appel à la méthode register du service AuthService
            const result = await authService_1.AuthService.register(email, password);
            return res.status(201).json(result);
        }
        catch (error) {
            console.error('Erreur lors de l\'inscription :', error);
            return res.status(400).json({
                error: error instanceof Error ? error.message : 'Échec de l\'inscription'
            });
        }
    })().catch(next);
});
//# sourceMappingURL=authRoutes.js.map