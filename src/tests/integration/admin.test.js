"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const node_test_1 = require("node:test");
const expect_1 = __importDefault(require("expect"));
(0, node_test_1.describe)('Admin Authentication', () => {
    (0, node_test_1.it)('should login successfully with correct credentials', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.default)
            .post('/api/v1/admin/login')
            .send({ username: 'admin', password: 'password123' });
        (0, expect_1.default)(response.status).toBe(200);
        (0, expect_1.default)(response.body.token).toBeDefined();
    }));
    (0, node_test_1.it)('should fail with incorrect credentials', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.default)
            .post('/api/v1/admin/login')
            .send({ username: 'admin', password: 'wrongpassword' });
        (0, expect_1.default)(response.status).toBe(401);
    }));
});
