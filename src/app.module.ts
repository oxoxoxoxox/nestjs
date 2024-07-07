import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Add } from './app.controller';
import { AddService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

@Module({
  imports: [],
  controllers: [Add],
  providers: [AddService],
})
export class AddModule {}
