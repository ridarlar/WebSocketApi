import { registerAs } from '@nestjs/config';

export default registerAs('configuration', () => ({
  server_port: process.env.PORT_SERVER,
  api_gateway: parseInt(process.env.PORT_API_GATEWAY, 10),
}));
