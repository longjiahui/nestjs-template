import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ResolveInterceptor } from './common/interceptors/resolve.interceptor'
import { RejectFilter } from './common/filters/reject.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalInterceptors(new ResolveInterceptor())
  app.useGlobalFilters(new RejectFilter())
  await app.listen(3000)
}
bootstrap()
