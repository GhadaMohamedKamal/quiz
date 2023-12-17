import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
