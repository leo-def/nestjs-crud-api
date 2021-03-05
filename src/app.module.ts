import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [CoreModule, SharedModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
