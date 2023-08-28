import { genSalt, hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserSeederCls {
	constructor(private readonly prisma: PrismaService) {}

	async createRegisters(): Promise<void> {
		await this.prisma.user.upsert({
			where: { email: 'chaos@gmail.com' },
			update: {},
			create: {
				email: 'chaos@gmail.com',
				username: 'Horus',
				password: await hash('1234', await genSalt()),
			},
		});
	}
}
