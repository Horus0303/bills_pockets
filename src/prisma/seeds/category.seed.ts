import { Category } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategorySeederCls {
	constructor(private readonly prisma: PrismaService) {}

	async createRegisters(): Promise<void> {
		await this.prisma.category.createMany({
			data: CategoryData,
		});
	}
}

const CategoryData: Pick<Category, 'name' | 'icon' | 'color'>[] = [
	{
		name: 'Alimentación',
		icon: 'assets/food.png',
		color: 'blue',
	},
	{
		name: 'Hogar',
		icon: 'assets/home.png',
		color: 'black',
	},
];
