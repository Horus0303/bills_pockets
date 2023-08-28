import {
	ApiBadRequestResponse,
	ApiForbiddenResponse,
	ApiInternalServerErrorResponse,
	ApiTags,
} from '@nestjs/swagger';
import { Status400, Status403, Status500 } from 'src/shared/infrastructure/utils';

@ApiTags('currencies')
@ApiBadRequestResponse({
	description: 'Bad Request',
	type: Status400,
})
@ApiForbiddenResponse({
	description: 'Forbidden',
	type: Status403,
})
@ApiInternalServerErrorResponse({
	description: 'Internal server error',
	type: Status500,
})
export class ApiSwagger {}
