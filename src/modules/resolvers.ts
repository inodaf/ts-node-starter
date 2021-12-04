/* eslint-disable @typescript-eslint/ban-types */

import {NonEmptyArray} from 'type-graphql';
import {GreetingsResolver} from './hello/views/greetings.resolver';

export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  GreetingsResolver,
];
