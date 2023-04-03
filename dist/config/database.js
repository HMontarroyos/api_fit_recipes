"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
async function connect() {
    try {
        const options = {};
        options.useNewUrlParser = true;
        options.useUnifiedTopology = true;
        await mongoose_1.default.connect("mongodb://localhost/recipes", options);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error(error);
    }
}
exports.connect = connect;
//# sourceMappingURL=database.js.map