import { Controller, Get } from '@hestjs/core';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello() {
    return {
      message: this.appService.getHello(),
      description: 'HestJS CQRS Demo - A demonstration of CQRS pattern using HestJS framework',
      endpoints: {
        users: {
          getAll: 'GET /users',
          getById: 'GET /users/:id',
          create: 'POST /users',
          update: 'PUT /users/:id',
        },
      },
    };
  }

  @Get('/error')
  throwError() {
    throw new Error('This is a test error for exception handling');
  }
}
