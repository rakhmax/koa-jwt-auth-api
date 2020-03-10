"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const cors_1 = __importDefault(require("@koa/cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const db_1 = __importDefault(require("./db"));
const api_1 = __importDefault(require("./api"));
const app = new koa_1.default();
app.use(koa_bodyparser_1.default());
app.use(cors_1.default());
app.use(api_1.default.routes());
db_1.default();
exports.default = app;
//# sourceMappingURL=app.js.map