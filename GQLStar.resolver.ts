import { Query, Arg, Resolver, FieldResolver, Root } from "type-graphql";
import Starmap from "./Starmap";
import { GQLStar } from "./GQLStar";
import { Star } from "noctis-starmap";

@Resolver(GQLStar)
export class GQLStarResolver {
  constructor() {}

  @Query(returns => GQLStar)
  async star(@Arg("name") name: string) {
    const star: Star | undefined = Starmap.getStarByName(name);
    if (star === undefined) {
      throw new Error("Star not found!");
    }
    return star;
  }

  @Query(returns => [GQLStar])
  async stars() {
    return Starmap.stars;
  }

  @FieldResolver()
  notes(@Root() star: GQLStar) {
    return Starmap.getGuideEntriesForStar(star.object_id);
  }
}
