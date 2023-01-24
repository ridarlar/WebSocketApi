import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server as SocketIOServer } from 'socket.io';
import { ConfigService } from '@nestjs/config';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly configService: ConfigService) {}
  @WebSocketServer() server: SocketIOServer;

  afterInit(server: SocketIOServer) {
    const port = this.configService.get('PORT_API_GATEWAY');
    server.listen(port);

    console.log('Socket.io server started on port:', port);
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
