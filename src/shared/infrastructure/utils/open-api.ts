import { ApiProperty } from '@nestjs/swagger';
import { ICustomResponse } from 'src/shared/domain/interfaces';

/***** Status 200 *****/
export class Status200 implements ICustomResponse {
	@ApiProperty({ example: 'OK' })
	message: string;

	@ApiProperty({ example: {} })
	data: object;
}

/***** Status 400 *****/
export class Status400 {
	@ApiProperty({ example: true })
	error: boolean;

	@ApiProperty({ example: 400 })
	code: number;

	@ApiProperty({ example: 'Incorrect input' })
	message: string;

	@ApiProperty({
		example: 'Bad Request',
	})
	errorMessage: string;
}

/***** Status 403 *****/
export class Status403 {
	@ApiProperty({ example: true })
	error: boolean;

	@ApiProperty({ example: 403 })
	code: number;

	@ApiProperty({ example: 'Forbidden' })
	message: string;

	@ApiProperty({
		example: 'Forbidden',
	})
	errorMessage: string;
}

/***** Status 404 *****/
export class Status404 {
	@ApiProperty({ example: true })
	error: boolean;

	@ApiProperty({ example: 404 })
	code: number;

	@ApiProperty({ example: 'Not found' })
	message: string;

	@ApiProperty({ example: 'Not found' })
	errorMessage: string;
}

/***** Status 500 *****/
export class Status500 {
	@ApiProperty({ example: true })
	error: boolean;

	@ApiProperty({ example: 500 })
	code: number;

	@ApiProperty({ example: 'Internal Server Error' })
	message: string;

	@ApiProperty({ example: 'Internal Server Error' })
	errorMessage: string;
}
