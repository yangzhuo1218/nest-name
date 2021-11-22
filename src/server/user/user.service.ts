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
    const photoToUpdate = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id: 1 })
      .getOne();
    return photoToUpdate; //调用数据的查询方法
  }
}
