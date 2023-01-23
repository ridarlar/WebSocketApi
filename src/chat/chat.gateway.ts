import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server as SocketIOServer } from 'socket.io';

@WebSocketGateway(7000, {
  cors: {
    origin: '*',
  },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: SocketIOServer;

  afterInit(server: SocketIOServer) {
    console.log('Websocket server initialized');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected');
  }

  @SubscribeMessage('event_send_message')
  handleSendMessage(client: any, payload: any) {
    console.log(
      `Client: ${client.id}
      Name: ${payload.userName}
      Message: ${payload.message}
      `,
    );

    this.server.emit('event_send_message', payload);
  }
}
