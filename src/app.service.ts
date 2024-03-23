import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger('AppService');

  constructor() {
    this.logger.log('Env Varialbes:', JSON.stringify(process.env, null, 4));
  }

  getHello() {
    this.logger.log(JSON.stringify(process.env, null, 4));
    return process.env;
  }
}
