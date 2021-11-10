import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UsersEntity } from './user.entity';
// 引入数据库的及配置文件
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])], //注入实体，可注入多个实体，是数组
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
