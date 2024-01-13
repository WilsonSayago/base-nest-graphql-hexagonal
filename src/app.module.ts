import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { MongooseModule } from "@nestjs/mongoose";
import { PokemonModule } from "./infra/primary/config/module/pokemon.module";
import { UsecaseModule } from "./infra/primary/config/module/usecase.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "./schema.gql",
      installSubscriptionHandlers: false,
    }),
    MongooseModule.forRoot("mongodb://localhost:27017/nest-pokemon"),
    PokemonModule,
    UsecaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
