import { Controller, Get, Req, HttpCode, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { ApiTags, ApiParam, ApiQuery, ApiHeader } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly user: UserService) {}

  @ApiTags('用户,安全')
  @Get('/users/:id')
  @ApiParam({
    name: 'id',
    description: '这是用户id',
  })
  @ApiQuery({
    name: 'role',
    description: '这是需要传递的参数',
  })
  @ApiHeader({
    name: 'authoriation',
    required: true,
    description: '本次请求请带上token',
  })
  @HttpCode(200)
  findAll(@Param('id') id, @Req() request: Request): string {
    return this.user.getID(id, request.query); // [All User's Info] 暂时代替所有用户的信息
  }
}
