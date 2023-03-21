import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HierarchyService } from './hierarchy.service';
import { Hierarchy } from './entities/hierarchy.entity';
import { CreateHierarchyInput } from './dto/create-hierarchy.input';
import { UpdateHierarchyInput } from './dto/update-hierarchy.input';

@Resolver(() => Hierarchy)
export class HierarchyResolver {
  constructor(private readonly hierarchyService: HierarchyService) {}

  @Mutation(() => Hierarchy)
  createHierarchy(@Args('createHierarchyInput') createHierarchyInput: CreateHierarchyInput) {
    return this.hierarchyService.create(createHierarchyInput);
  }

  @Query(() => [Hierarchy], { name: 'hierarchy' })
  findAll() {
    return this.hierarchyService.findAll();
  }

  @Query(() => Hierarchy, { name: 'hierarchy' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hierarchyService.findOne(id);
  }

  @Mutation(() => Hierarchy)
  updateHierarchy(@Args('updateHierarchyInput') updateHierarchyInput: UpdateHierarchyInput) {
    return this.hierarchyService.update(updateHierarchyInput.id, updateHierarchyInput);
  }

  @Mutation(() => Hierarchy)
  removeHierarchy(@Args('id', { type: () => Int }) id: number) {
    return this.hierarchyService.remove(id);
  }
}
