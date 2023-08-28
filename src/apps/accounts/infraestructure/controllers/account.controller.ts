import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AccountService } from '../../services/account.service';
import { ApiSwagger } from 'src/shared/infrastructure/classes';
import { ApiTags } from '@nestjs/swagger';
import { CreateAccountDto } from '../dtos';
import { ICustomRequest } from 'src/shared/domain/interfaces';
import { Response } from 'express';

@ApiTags('wallets')
@Controller({ path: 'accounts', version: '1' })
export class AccountController extends ApiSwagger {
	constructor(private readonly accountService: AccountService) {
		super();
	}

	@Post()
	async create(
		@Body() body: CreateAccountDto,
		@Req() req: ICustomRequest,
		@Res() res: Response,
	): Promise<void> {
		try {
			console.log('ACCOUNT CONTROLLER');
			await this.accountService.create(body);
			res.status(201).send({ OK: true });
		} catch (e) {
			throw e;
		}
	}
}
