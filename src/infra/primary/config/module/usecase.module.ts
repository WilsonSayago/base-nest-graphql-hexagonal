import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsecaseInstance } from "../instance/usecase.instance";
import {
  PokemonDao,
  PokemonDaoSchema,
} from "../../../secundary/repository/mongo/dao/pokemonDao";
import { PokemonRepository } from "../../../secundary/repository/pokemon.repository";

@Module({
  controllers: [],
  imports: [
    MongooseModule.forFeature([
      { name: PokemonDao.name, schema: PokemonDaoSchema },
    ]),
  ],
  providers: [UsecaseInstance, PokemonRepository],
  exports: [UsecaseInstance],
})
export class UsecaseModule {}
