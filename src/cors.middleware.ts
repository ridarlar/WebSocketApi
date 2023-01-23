import { NestMiddleware, Injectable } from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    throw new Error('Method not implemented.');
  }
  resolve(...args: any[]): any {
    return (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      res.header('Access-Control-Allow-Methods', '*');
      next();
    };
  }
}
