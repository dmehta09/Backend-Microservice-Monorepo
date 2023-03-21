import { CreateHierarchyInput } from './create-hierarchy.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHierarchyInput extends PartialType(CreateHierarchyInput) {
  @Field(() => Int)
  id: number;
}
