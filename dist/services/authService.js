"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const User_1 = require("../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
class AuthService {
    static createToken(user) {
        return jsonwebtoken_1.default.sign({
            userId: user.id,
            email: user.email,
            role: user.role,
            hasPaid: user.hasPaid
        }, config_1.config.jwtSecret, { expiresIn: this.TOKEN_EXPIRATION });
    }
    static formatUserResponse(user) {
        return {
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                hasPaid: user.hasPaid
            },
            token: this.createToken(user)
        };
    }
    static async register(email, password) {
        const existingUser = await User_1.User.findOne({ email }).exec();
        if (existingUser) {
            throw new Error('Email already in use');
        }
        const user = new User_1.User({ email, password });
        await user.save();
        return this.formatUserResponse(user);
    }
    static async login(email, password) {
        const user = await User_1.User.findOne({ email }).exec();
        if (!user) {
            throw new Error('Invalid credentials');
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        return this.formatUserResponse(user);
    }
}
exports.AuthService = AuthService;
AuthService.TOKEN_EXPIRATION = '24h';
//# sourceMappingURL=authService.js.map