import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { json, urlencoded } from "body-parser";
import { useContainer } from "class-validator";
import { AppModule } from "./app.module";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
