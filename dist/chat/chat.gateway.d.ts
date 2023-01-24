import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server as SocketIOServer } from 'socket.io';
import { ConfigService } from '@nestjs/config';
export declare class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly configService;
    constructor(configService: ConfigService);
    server: SocketIOServer;
    afterInit(server: SocketIOServer): void;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
    handleSendMessage(client: any, payload: any): void;
}
