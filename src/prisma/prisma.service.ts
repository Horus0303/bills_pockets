import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
	extends PrismaClient<Prisma.PrismaClientOptions, 'query' | 'error' | 'beforeExit'>
	implements OnModuleInit
{
	private static instance: PrismaService;
	[x: string]: any; // Linter doesnt detect new entity from schema

	constructor() {
		super({
			log: [
				{ emit: 'stdout', level: 'query' },
				{ emit: 'stdout', level: 'info' },
				{ emit: 'stdout', level: 'warn' },
				// { emit: 'stdout', level: 'error' }, // TODO: Esto hacerlo switchable para modo local o desarrollo
			],
			errorFormat: 'colorless',
		});

		if (PrismaService.instance) {
			return PrismaService.instance;
		}

		PrismaService.instance = this;
	}

	async onModuleInit() {
		await this.$connect();
		this.$on('query', (e) => {
			console.log(`--- Query: ${e.query}`);
			console.log(`---Duration: ${e.duration}ms`);
		});
	}

	async enableShutdownHooks(app: INestApplication) {
		this.$on('beforeExit', async () => {
			await app.close();
		});
	}

	async selectConnection(prisma: Prisma.TransactionClient) {
		return prisma ? prisma : this;
	}
}
