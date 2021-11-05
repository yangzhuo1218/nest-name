import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly user: UserService) {}

  @Get('users')
  findAll(): string {
    return this.user.getID('11'); // [All User's Info] 暂时代替所有用户的信息
  }
}
