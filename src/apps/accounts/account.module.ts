import { AccountController } from './infraestructure/controllers/';
import { AccountRepository } from './infraestructure/repositories/';
import { AccountService } from './services/account.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [AccountController],
	providers: [AccountService, AccountRepository],
})
export class AccountModule {}
