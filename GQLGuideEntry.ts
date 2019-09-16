import { ObjectType, Field } from "type-graphql";
import { GuideEntry } from "noctis-starmap";

@ObjectType()
export class GQLGuideEntry implements GuideEntry {
  @Field()
  object_id!: number;

  @Field()
  text!: string;
}
