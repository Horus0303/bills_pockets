import { CreateSpentDto } from 'src/apps/spents/infrastructure/dtos/create-spent.dto';

export interface ISpentService {
	create(body: CreateSpentDto): Promise<void>;
	update(id: number, body: any): Promise<void>;
}
