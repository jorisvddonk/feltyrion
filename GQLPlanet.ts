import { ObjectType, Field } from "type-graphql";
import { Planet } from "noctis-starmap";
import { GQLGuideEntry } from "./GQLGuideEntry";
import { GQLStar } from "./GQLStar";

@ObjectType()
export class GQLPlanet implements Planet {
  @Field()
  name!: string;

  @Field()
  x!: number;

  @Field()
  y!: number;

  @Field()
  z!: number;

  @Field()
  index!: string;

  @Field()
  _index!: number;

  @Field(type => [GQLGuideEntry])
  notes: GQLGuideEntry[] | undefined;

  @Field(type => GQLStar)
  star: GQLStar | undefined;
}
