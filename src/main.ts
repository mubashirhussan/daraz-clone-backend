import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //  Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle("Daraz Clone API")
    .setDescription("Daraz Clone API documentation using Swagger")
    .setVersion("1.0")
    .addBearerAuth() // (optional) agar aap JWT use kar rahe hain
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document); // `/api` endpoint par Swagger UI milega
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err: unknown) => {
  //  Properly type error handling to avoid `no-unsafe-*` rules
  if (err instanceof Error) {
    console.error(" Bootstrap failed:", err.message);
  } else {
    console.error(" Unknown error during bootstrap", err);
  }
  process.exit(1);
});
