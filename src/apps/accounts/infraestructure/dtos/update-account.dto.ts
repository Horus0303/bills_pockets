import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum TypeAccount {
	Debit = 'debit',
	Credit = 'credit',
}

export class UpdateAccountDto {
	@ApiProperty({ required: false, example: 'BBVA Débito' })
	@IsOptional()
	name?: number;

	@ApiProperty({ required: false, example: 'debit' })
	@IsOptional()
	icon?: number;

	@ApiProperty({ required: false, example: 85000 })
	@IsNumber()
	@IsOptional()
	amount?: number;

	@ApiProperty({ required: false, example: 'wine' })
	@IsOptional()
	color?: number;

	@ApiProperty({ required: false, example: 100 })
	@IsEnum(TypeAccount)
	@IsOptional()
	type?: TypeAccount;
}
