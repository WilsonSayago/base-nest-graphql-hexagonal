import { Pokemon } from "../domain/pokemon.domain";
import { DatabasePort } from "../port/database.port";
import { PokemonUsecase } from "../pokemon-usecase.core";

export class PokemonService implements PokemonUsecase {
  readonly dbport: DatabasePort;
  constructor(dbport: DatabasePort) {
    this.dbport = dbport;
  }
  async findById(id: string): Promise<Pokemon> {
    return this.dbport.findById(id);
  }

  async findAll(): Promise<Pokemon[]> {
    return this.dbport.findAll();
  }
}
