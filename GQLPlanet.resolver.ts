import { Query, Arg, Resolver, FieldResolver, Root } from "type-graphql";
import Starmap from "./Starmap";
import { GQLPlanet } from "./GQLPlanet";
import { Star, Planet } from "noctis-starmap";
import { GQLStar } from "./GQLStar";

@Resolver(GQLPlanet)
export class GQLPlanetResolver {
  constructor() {}

  @Query(returns => GQLPlanet)
  async planet(@Arg("name") name: string) {
    const planet: Planet | undefined = Starmap.getPlanetByName(name);
    if (planet === undefined) {
      throw new Error("Planet not found!");
    }
    return planet;
  }

  @Query(returns => [GQLPlanet])
  async planets() {
    return Starmap.planets;
  }

  @FieldResolver()
  notes(@Root() planet: GQLPlanet) {
    return Starmap.getGuideEntriesForPlanetByName(planet.name);
  }
}
