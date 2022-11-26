import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { createDatabase } from 'typeorm-extension'
import postgresConnection from './postgres-config'

async function bootstrap() {
    await createDatabase({ ifNotExist: true, options: postgresConnection })

    const app = await NestFactory.create(AppModule)

    app.enableCors({
        origin: [/^(.*)/],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 200,
        credentials: true,
        allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization,authorization,X-Forwarded-for',
    })

    await app.listen(5000)
}
bootstrap()
