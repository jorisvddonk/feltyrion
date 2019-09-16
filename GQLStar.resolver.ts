import { Query, Arg, Resolver } from "type-graphql";
import Starmap from "./Starmap";
import { GQLStar } from "./GQLStar";

@Resolver(GQLStar)
export class GQLStarResolver {
  constructor() {}

  @Query(returns => GQLStar)
  async star(@Arg("name") name: string) {}

  @Query(returns => [GQLStar])
  async stars() {
    return Starmap.stars;
  }
}
