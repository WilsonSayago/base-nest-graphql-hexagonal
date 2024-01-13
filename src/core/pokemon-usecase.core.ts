import { Pokemon } from "./domain/pokemon.domain";

export interface PokemonUsecase {
  findById(id: string): Promise<Pokemon>;
  findAll(): Promise<Pokemon[]>;
}
