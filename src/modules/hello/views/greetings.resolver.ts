import {Resolver, Query} from 'type-graphql';

@Resolver()
export class GreetingsResolver {
  @Query(() => String)
  public async sayHi(): Promise<string> {
    return 'Howdy, Developer!';
  }
}
