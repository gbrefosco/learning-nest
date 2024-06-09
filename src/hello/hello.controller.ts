import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

interface HelloRequest {
  name: string;
}

interface HelloResponse {
  message: string;
}

@Controller()
export class HelloController {
  @GrpcMethod('HelloService', 'sayHello')
  sayHello(data: HelloRequest): HelloResponse {
    const message = `Hello ${data.name}`;

    return { message };
  }
}
