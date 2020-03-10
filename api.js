"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const controllers_1 = require("./controllers");
const router = new koa_router_1.default();
router.post('/signup', controllers_1.signup);
router.post('/login', controllers_1.login);
exports.default = router;
//# sourceMappingURL=api.js.map