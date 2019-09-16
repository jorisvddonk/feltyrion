import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class GQLStar {
  @Field(type => ID)
  id!: number;

  @Field()
  name!: string;

  @Field()
  x!: number;

  @Field()
  y!: number;

  @Field()
  z!: number;

  @Field()
  object_id!: number;

  @Field()
  type!: string;
}
