"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const login = async (ctx) => {
    try {
        const user = await models_1.User.findOne({ email: ctx.request.body.email });
        if (!user) {
            ctx.throw(400, 'Пользователя не существует или неверный пароль');
        }
        const isPasswordCorrect = await bcrypt_1.default.compare(ctx.request.body.password, user.password);
        if (!isPasswordCorrect) {
            ctx.throw(400, 'Пользователя не существует или неверный пароль');
        }
        const payload = {
            id: user.id,
            name: user.firstname
        };
        const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        ctx.body = { userId: user.id, token: token, tokenExpiration: 1 };
    }
    catch (error) {
        throw error;
    }
};
exports.default = login;
//# sourceMappingURL=login.js.map