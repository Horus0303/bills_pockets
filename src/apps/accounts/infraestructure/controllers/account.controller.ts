import { Body, Controller, Param, Post, Put, Req, Res } from '@nestjs/common';
import { AccountService } from '../../services/account.service';
import { ApiSwagger } from 'src/shared/infrastructure/classes';
import { ApiTags } from '@nestjs/swagger';
import { CreateAccountDto } from '../dtos';
import { ICustomRequest } from 'src/shared/domain/interfaces';
import { Response } from 'express';
import { UpdateAccountDto } from '../dtos/update-account.dto';

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

	@Put(':id')
	async update(
		@Param('id') id: number,
		@Body() body: UpdateAccountDto,
		@Res() res: Response,
	): Promise<void> {
		try {
			console.log('BODY', body);

			if (!Object.entries(body).length) {
				res.status(422).send({ message: 'At least one property is required' });
				return;
			}

			await this.accountService.update(+id, body);
			res.status(200).send({ message: 'Account updated successfully' });
		} catch (e) {
			throw e;
		}
	}
}
