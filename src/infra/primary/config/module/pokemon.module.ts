import { Module } from "@nestjs/common";
import { UsecaseModule } from "./usecase.module";
import { PokemonResolver } from "../../resolver/pokemon.resolver";

@Module({
  controllers: [],
  imports: [UsecaseModule],
  providers: [PokemonResolver],
  exports: [],
})
export class PokemonModule {}
