import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAccountDto {
	@ApiProperty({ required: true, example: 'BBVA Débito' })
	@IsNotEmpty()
	name: number;

	@ApiProperty({ required: true, example: 'debit' })
	@IsNotEmpty()
	icon: number;

	@ApiProperty({ required: true, example: 85000 })
	@IsNumber()
	@IsNotEmpty()
	amount: number;

	@ApiProperty({ required: true, example: 'wine' })
	@IsNotEmpty()
	color: number;
}
