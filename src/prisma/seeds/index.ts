/* eslint-disable require-await */
import { CategorySeederCls } from './category.seed';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserSeederCls } from './user.seed';

const prismaService = new PrismaService();

@Injectable()
export class mainSeederCls {
	private categorySeeder: CategorySeederCls;
	private userSeeder: UserSeederCls;
	constructor(private prisma: PrismaService) {}

	async build(prisma: PrismaService) {
		this.userSeeder = new UserSeederCls(prisma);
		this.categorySeeder = new CategorySeederCls(prisma);
	}

	async run() {
		// await Promise.all([this.userSeeder.createRegisters()]);

		await this.prisma.$transaction(async (prisma: PrismaService) => {
			[
				await this.build(prisma),
				await this.userSeeder.createRegisters(),
				await this.categorySeeder.createRegisters(),
			];
			return true;
		});
	}
}

const mainSeeder = new mainSeederCls(prismaService);
(async () => {
	mainSeeder.run();
})();
