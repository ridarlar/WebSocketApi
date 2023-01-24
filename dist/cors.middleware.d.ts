import { NestMiddleware } from '@nestjs/common';
export declare class CorsMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void): void;
    resolve(...args: any[]): any;
}
