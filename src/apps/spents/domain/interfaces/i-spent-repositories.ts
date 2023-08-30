import { CreateSpentDto } from '../../infrastructure/dtos/create-spent.dto';

export interface ISpentRepository {
	create(data: CreateSpentDto): Promise<void>;
}
