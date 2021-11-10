import { Injectable } from '@nestjs/common';
import { UsersEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersEntity) //注入数据库实体
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}
  async getID(): Promise<any> {
    const photoToUpdate = await this.usersRepository.findOne(1);
    await this.usersRepository.save({
      ...photoToUpdate,
      bookName: '哈哈哈哈 - 测试更改',
    });
    return photoToUpdate; //调用数据的查询方法
  }
}
