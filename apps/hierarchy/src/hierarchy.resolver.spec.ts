import { Test, TestingModule } from '@nestjs/testing';
import { HierarchyResolver } from './hierarchy.resolver';
import { HierarchyService } from './hierarchy.service';

describe('HierarchyResolver', () => {
  let resolver: HierarchyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HierarchyResolver, HierarchyService],
    }).compile();

    resolver = module.get<HierarchyResolver>(HierarchyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
