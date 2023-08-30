import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { ApiSwagger } from 'src/shared/infrastructure/classes';
import { ApiTags } from '@nestjs/swagger';
import { CreateSpentDto } from '../dtos/create-spent.dto';
import { ICustomRequest } from 'src/shared/domain/interfaces';
import { Response } from 'express';
import { SpentService } from '../../services';

@ApiTags('spent')
@Controller({ path: 'spent', version: '1' })
export class SpentController extends ApiSwagger {
	constructor(private readonly spentService: SpentService) {
		super();
	}

	@Post()
	async create(
		@Body() body: CreateSpentDto,
		@Req() req: ICustomRequest,
		@Res() res: Response,
	): Promise<void> {
		try {
			console.log('SPENT CONTROLLER');
			await this.spentService.create(body);
			res.status(201).send({ OK: true });
		} catch (e) {
			throw e;
		}
	}
}
