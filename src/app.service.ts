import { Injectable } from '@nestjs/common';
import { App } from './app.entity';

@Injectable()
export class AppService {

  getApp(): App {
    return {
      name: this.getName(),
      desc: this.getDesc(),
      version: this.getVersion(),
    }
  }

  getName(): string {
    return 'Hinter';
  }

  getDesc(): string {
    return 'A price scouting web bot.';
  }

  getVersion(): string {
    return '0.0.1';
  }
}
