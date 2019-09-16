import { Query, Arg, Resolver } from "type-graphql";
import { Star } from "./Star";
import { Noctis } from "noctis-starmap";
import Starmap from "./Starmap";

@Resolver(Star)
export class StarResolver {
  constructor() {}

  @Query(returns => Star)
  async star(@Arg("name") name: string) {}

  @Query(returns => [Star])
  async stars() {
    return Starmap.stars;
  }
}
