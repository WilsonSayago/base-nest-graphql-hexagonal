import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class PokemonDto {
  @Field(() => String, {})
  id: string;

  @Field(() => String, {})
  name: string;
}
