"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const db_1 = require("./db");
const authRoutes_1 = require("./routes/authRoutes");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Connexion à MongoDB
(0, db_1.connectDB)();
const corsOptions = {
    origin: [
        'https://minima-app-frontend.vercel.app',
        'http://localhost:3000'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
// Protection contre les requêtes abusives
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);
// Routes
app.use('/api', authRoutes_1.authRouter);
// Route de test
app.get('/', (_req, res) => {
    res.send('<h1>Welcome to the Minima App Backend!</h1>');
});
// Gestion des erreurs 404
app.use((_req, res) => {
    res.status(404).send('Not Found');
});
exports.default = app;
//# sourceMappingURL=app.js.map