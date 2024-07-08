import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'welcome';
  }
}
@Injectable()
export class AddService {
  getAdd(a: number, b: number): number {
    return a + b;
  }
}
