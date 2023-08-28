import { Global, Module } from '@nestjs/common';
// import { CacheControl } from './infrastructure/cache';

@Global()
@Module({
	// providers: [CacheControl],
	// exports: [CacheControl],
})
export class SharedModule {}
