import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger('AppService');

  constructor() {
    this.logger.log('Env Varialbes:', process.env);
  }

  getHello() {
    this.logger.log(process.env);
    return process.env;
  }
}
