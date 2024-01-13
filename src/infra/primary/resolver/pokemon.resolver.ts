import { ModuleRef } from "@nestjs/core";
import { Pokemon } from "../../../core/domain/pokemon.domain";
import { PokemonUsecase } from "../../../core/pokemon-usecase.core";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { PokemonDto } from "./type/pokemon-dto.type";
import { PokemonRepository } from "../../secundary/repository/pokemon.repository";
import { UsecaseInstance } from "../config/instance/usecase.instance";

@Resolver(() => PokemonDto)
export class PokemonResolver {
  private pokemonService: PokemonUsecase;
  constructor(private readonly usecaseInstance: UsecaseInstance) {
    this.pokemonService = this.usecaseInstance.createPokemonUseCaseInstance();
  }

  @Query(() => [PokemonDto], { name: "getAllPokemon", nullable: true })
  async findAll(): Promise<PokemonDto[]> {
    const data = await this.pokemonService.findAll();
    return data.map((pokemon: Pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
    }));
  }

  @Query(() => PokemonDto, { name: "getPokemonById", nullable: true })
  async findOne(
    @Args("id", { type: () => String }) id: string,
  ): Promise<PokemonDto> {
    const pokemon = await this.pokemonService.findById(id);
    return {
      id: pokemon.id,
      name: pokemon.name,
    };
  }
}
