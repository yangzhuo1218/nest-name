import { Controller, Get, Param } from '@nestjs/common';
import { ForbiddenException } from '../../common/exception/forbidden.exception';
import { UserService } from '../user/user.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly user: UserService) {
    
  }

  @Get()
  async findAll(@Param() params) {
    return this.user.getID(); // [All User's Info] 暂时代替所有用户的信息
  }
}
