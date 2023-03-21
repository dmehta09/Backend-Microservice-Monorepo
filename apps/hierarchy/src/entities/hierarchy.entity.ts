import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Hierarchy {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
