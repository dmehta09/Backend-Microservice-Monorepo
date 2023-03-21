import { Module } from '@nestjs/common';
import { HierarchyService } from './hierarchy.service';
import { HierarchyResolver } from './hierarchy.resolver';

@Module({
  providers: [HierarchyResolver, HierarchyService]
})
export class HierarchyModule {}
