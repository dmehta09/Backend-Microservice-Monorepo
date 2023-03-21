import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHierarchyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
