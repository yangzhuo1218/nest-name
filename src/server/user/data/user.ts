import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({
    description: '用户名',
  })
  username: string;
}
