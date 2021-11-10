import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'books' }) //数据表的名字
export class UsersEntity {
  @PrimaryGeneratedColumn() // 自动生成id
    id: number;

  @Column() 
  bookName: string
}
