import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {exampleFunction} from "@blue/common";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("-> nest-app", exampleFunction());
    return this.appService.getHello();
  }
}
