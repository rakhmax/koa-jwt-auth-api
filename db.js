"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const config_1 = require("./config");
const app_1 = __importDefault(require("./app"));
const db = async () => {
    try {
        await mongoose_1.connect(config_1.MONGO_URI, { useNewUrlParser: true });
        console.clear();
        app_1.default.listen(config_1.PORT, () => console.log(`Server is running in http://localhost:${config_1.PORT}`));
    }
    catch (error) {
        console.error('Unable to connect to database\n');
        console.error(error);
        process.exit(1);
    }
};
exports.default = db;
//# sourceMappingURL=db.js.map