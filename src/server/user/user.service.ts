import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getID(id): string {
    return `你的id是 ${id}`;
  }
}
