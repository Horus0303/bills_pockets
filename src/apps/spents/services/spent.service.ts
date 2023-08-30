import { Inject, Injectable } from '@nestjs/common';
import { CreateSpentDto } from '../infrastructure/dtos/create-spent.dto';
import { ISpentService } from '../domain/interfaces/i-spent-services';
import { SpentRepository } from '../infrastructure/repositories';

@Injectable()
export class SpentService implements ISpentService {
	constructor(
		@Inject(SpentRepository)
		private readonly spentRepository: SpentRepository,
	) {}

	async create(body: CreateSpentDto): Promise<any> {
		console.log(body);
		await this.spentRepository.create(body);
	}

	async update(id: number, body: any): Promise<any> {
		await this.spentRepository.update(id, body);
	}
}
