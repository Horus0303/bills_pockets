import { AccountModule } from './apps/accounts/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { globalConfig } from './shared/config';
import { Module } from '@nestjs/common';
import { SpentModule } from './apps/spents/spent.module';
import { UsersModule } from './apps/users/user.module';

@Module({
	imports: [
		SpentModule,
		AccountModule,
		UsersModule,
		ConfigModule.forRoot({
			cache: true,
			isGlobal: true,
			load: [globalConfig],
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
