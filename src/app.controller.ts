import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { App } from './app.entity';

@Controller()
export class AppController {
  
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  index(): App {
    return this.appService.getApp();
  }

  @Get('name')
  name(): string {
    return this.appService.getName();
  }

  @Get('version')
  version(): string {
    return this.appService.getVersion();
  }

}
