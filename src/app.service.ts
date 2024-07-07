import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
@Injectable()
export class AddService {
  getAdd(a: number, b: number): number {
    return a + b;
  }
}
