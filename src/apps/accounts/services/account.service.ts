import { Inject, Injectable } from '@nestjs/common';
import { AccountRepository } from '../infraestructure/repositories/account.repository';
import { CreateAccountDto } from '../infraestructure/dtos';

@Injectable()
export class AccountService {
	constructor(
		@Inject(AccountRepository)
		private readonly accountRepository: AccountRepository,
	) {}

	async create(body: CreateAccountDto): Promise<any> {
		console.log(body);
		await this.accountRepository.create(body);
	}

	async update(id: string, body: any): Promise<any> {
		await this.accountRepository.update(id, body);
	}
}
