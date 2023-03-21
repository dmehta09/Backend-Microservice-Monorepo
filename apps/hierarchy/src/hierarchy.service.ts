import { Injectable } from '@nestjs/common';
import { CreateHierarchyInput } from './dto/create-hierarchy.input';
import { UpdateHierarchyInput } from './dto/update-hierarchy.input';

@Injectable()
export class HierarchyService {
  create(createHierarchyInput: CreateHierarchyInput) {
    return 'This action adds a new hierarchy';
  }

  findAll() {
    return `This action returns all hierarchy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hierarchy`;
  }

  update(id: number, updateHierarchyInput: UpdateHierarchyInput) {
    return `This action updates a #${id} hierarchy`;
  }

  remove(id: number) {
    return `This action removes a #${id} hierarchy`;
  }
}
