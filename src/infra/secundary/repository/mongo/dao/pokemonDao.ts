import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PokemonDaoDocument = HydratedDocument<PokemonDao>;
@Schema()
export class PokemonDao {
  @Prop()
  name: string;

  @Prop()
  no: number;
}

export const PokemonDaoSchema = SchemaFactory.createForClass(PokemonDao);
