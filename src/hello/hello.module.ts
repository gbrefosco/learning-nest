import { Module } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloResolver } from './hello.resolver';
import { HelloController } from './hello.controller';

@Module({
  providers: [HelloService, HelloResolver],
  controllers: [HelloController],
})
export class HelloModule {}
