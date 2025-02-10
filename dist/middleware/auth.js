"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const User_1 = require("../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const auth = async (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
        if (!token) {
            throw new Error('Token missing');
        }
        const decoded = jsonwebtoken_1.default.verify(token, config_1.config.jwtSecret);
        const user = await User_1.User.findById(decoded.userId);
        if (!user) {
            throw new Error('User not found');
        }
        req.user = {
            userId: user.id,
            email: user.email,
            hasPaid: user.hasPaid,
            role: user.role
        };
        next();
    }
    catch (error) {
        res.status(401).json({
            error: error instanceof Error ? error.message : 'Authentication error'
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map