import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getID(id, query): string {
    return `你的id是 ${id},其余参数为 ${query}`;
  }
}
