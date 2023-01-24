"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('configuration', () => ({
    server_port: process.env.PORT_SERVER,
    api_gateway: parseInt(process.env.PORT_API_GATEWAY, 10),
}));
//# sourceMappingURL=configuration.js.map