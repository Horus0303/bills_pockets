import { CreateAccountDto } from '../dtos';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountRepository {
	constructor(private prisma: PrismaService) {}

	async create(data: CreateAccountDto): Promise<void> {
		await this.prisma.Account.create({ data });
	}

	async update(id: string, data: any): Promise<void> {
		await this.prisma.Account.update({ where: { id }, data });
	}
}
