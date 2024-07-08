import { Controller, Get } from '@nestjs/common';
import { AddService, AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/welcome/')
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller() //어노테이션.
export class Add {
  a: number = 3;
  b: number = 1;
  constructor(private readonly addService: AddService) {}

  @Get('/plus/mi')
  getAdd(): number {
    return this.addService.getAdd(this.a, this.b);
  }
}
