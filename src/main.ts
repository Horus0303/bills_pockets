import { AppModule } from './app.module';
import { Server } from './server';

async function bootstrap() {
	await Server.run(AppModule);
}
bootstrap().catch((e) => console.error(e, bootstrap.name));
