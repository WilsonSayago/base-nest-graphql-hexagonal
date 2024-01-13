import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PokemonDao } from "./mongo/dao/pokemonDao";
import { Pokemon } from "../../../core/domain/pokemon.domain";
import { DatabasePort } from "../../../core/port/database.port";

@Injectable()
export class PokemonRepository implements DatabasePort {
  constructor(
    @InjectModel(PokemonDao.name)
    private pokemonDaoModel: Model<PokemonDao>,
  ) {}

  async findById(id: string): Promise<Pokemon> {
    const pokemonDao = await this.pokemonDaoModel.findById(id).exec();
    return new Pokemon(pokemonDao._id.toString(), pokemonDao.name);
  }

  async findAll(): Promise<Pokemon[]> {
    const pokemones = await this.pokemonDaoModel.find().exec();
    return pokemones.map((pokemonDao) => {
      return new Pokemon(pokemonDao._id.toString(), pokemonDao.name);
    });
  }
}
