import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSpentDto {
	@ApiProperty({ required: true, example: 85000 })
	@IsNumber()
	@IsNotEmpty()
	amount: number;

	@ApiProperty({ required: true, example: 'Cheetos' })
	@IsNotEmpty()
	name: string;

	@ApiProperty({ required: true, example: 'Compre cheetos azules' })
	@IsOptional()
	details: string;

	@ApiProperty({ required: true, example: 1 })
	@IsNumber()
	@IsNotEmpty()
	categoryId: number;

	@ApiProperty({ required: true, example: 1 })
	@IsNumber()
	@IsNotEmpty()
	userId: number;
}
