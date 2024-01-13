import { PokemonService } from "../../../../core/service/pokemon.service";
import { ModuleRef } from "@nestjs/core";
import { PokemonRepository } from "../../../secundary/repository/pokemon.repository";
import { PokemonUsecase } from "../../../../core/pokemon-usecase.core";
import { Injectable } from "@nestjs/common";
import { DatabasePort } from "../../../../core/port/database.port";

@Injectable()
export class UsecaseInstance {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  createPokemonUseCaseInstance(): PokemonUsecase {
    return new PokemonService(this.pokemonRepository);
  }
}
