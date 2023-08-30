import { CreateSpentDto } from '../dtos/create-spent.dto';
import { Injectable } from '@nestjs/common';
import { ISpentRepository } from '../../domain/interfaces';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpentRepository implements ISpentRepository {
	constructor(private prisma: PrismaService) {}

	async create(data: CreateSpentDto): Promise<void> {
		await this.prisma.Spent.create({ data });
	}

	async update(id: number, data: any): Promise<void> {
		await this.prisma.Spent.update({ where: { id }, data });
	}
}
