import { Pokemon } from "../domain/pokemon.domain";

export interface DatabasePort {
  findById(id: string): Promise<Pokemon>;
  findAll(): Promise<Pokemon[]>;
}
