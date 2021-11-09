import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './server/user/user.module';
import { AdminModule } from './server/admin/admin.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [UserModule, AdminModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user');
  }
}
