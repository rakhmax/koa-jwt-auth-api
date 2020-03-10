"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const signup = async (ctx) => {
    try {
        const user = await models_1.User.findOne({ email: ctx.request.body.email });
        if (user) {
            ctx.throw(400, 'Пользователь уже существует');
        }
        let password = await bcrypt_1.default.hash(ctx.request.body.password, 10);
        await models_1.User.create(Object.assign(Object.assign({}, ctx.request.body), { password }));
        ctx.body = 'Успешная регистрация';
    }
    catch (error) {
        throw error;
    }
};
exports.default = signup;
//# sourceMappingURL=signup.js.map