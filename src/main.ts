import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  const config = new DocumentBuilder()
  .setTitle('Documentação com Swagger - Fábrica de Sinapse')
  .setDescription( 'O Swagger (aka OpenApi) é uma biblioteca muito conhecida no universo backend, estando disponível para diversas linguagens e frameworks. Ela gera um site interno no seu backend que descreve, com muitos detalhes, cada endpoint e estrutura de entidades presentes na sua aplicação.', )
  .setVersion('1.0')
  .build();

  const document = SwaggerModule
  .createDocument(app, config); 

  SwaggerModule.setup('/api', app, document);

  await app.listen(5000)
  .then(() => {
    console.log("successfully stared on port 5000");
  }).catch((error) => {
    console.log(error);
  })
}

bootstrap();
