import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
// import { ApiDocPath } from './shared/config';
import { ConfigService } from '@nestjs/config';
// import { headersParser } from './shared/infrastructure/middlewares';
import helmet from 'helmet';
// import { MainErrorHandlerFilter } from 'src/shared/infrastructure/exceptions';
import { NestFactory } from '@nestjs/core';

interface IOpenApiOptions {
	name: string;
	version: string;
	path: string;
	render?: boolean;
}

export class Server {
	static async createApplication(module: any): Promise<INestApplication> {
		const app = await NestFactory.create(module);
		return app;
	}

	static configureHttpServer({ app }: { app: INestApplication }): void {
		const configService = app.get(ConfigService);

		app.setGlobalPrefix('public', {
			exclude: ['_/health', '_health'],
		}).enableVersioning();

		app.enableCors();

		app.use(
			helmet({
				contentSecurityPolicy: false,
				crossOriginEmbedderPolicy: false,
			}),
		)
			.use(urlencoded({ extended: true }))
			// .use(headersParser)
			.use(json({ limit: '10mb' }))
			.useGlobalPipes(
				new ValidationPipe({
					whitelist: true,
					forbidNonWhitelisted: false,
				}),
			);
		// .useGlobalFilters(new MainErrorHandlerFilter(configService));
	}

	static async listen(app: INestApplication, port: number): Promise<void> {
		await app.listen(port);

		Logger.log(`Server successfully started [${port}]: ${await app.getUrl()}`, Server.name);
	}

	static async run(module: any, openApiOptions: Partial<IOpenApiOptions> = {}): Promise<INestApplication> {
		const app = await Server.createApplication(module);

		Server.configureHttpServer({ app });

		const configService = app.get(ConfigService);

		const { name, version, path, render = true } = openApiOptions;
		Server.renderOpenAPIDoc(app, {
			name: name || 'default',
			version: version || '1.0',
			path: path || '/', // ApiDocPath,
		});

		await Server.listen(app, configService.getOrThrow('port'));

		return app;
	}

	static renderOpenAPIDoc(app: INestApplication, options: IOpenApiOptions): void {
		const title = `${options.name}`;
		const config: any = new DocumentBuilder().setVersion(options.version).setTitle(title).build();

		const document: OpenAPIObject = SwaggerModule.createDocument(app, config);

		SwaggerModule.setup(options.path, app, document, {
			swaggerOptions: { defaultModelsExpandDepth: -1 },
		});
	}
}
