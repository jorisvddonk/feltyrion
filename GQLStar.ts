import { ObjectType, Field } from "type-graphql";
import { Star } from "noctis-starmap";
import { GQLGuideEntry } from "./GQLGuideEntry";

@ObjectType()
export class GQLStar implements Star {
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

  @Field(type => [GQLGuideEntry])
  notes: GQLGuideEntry[] | undefined;
}
