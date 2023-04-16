import { Test, TestingModule } from '@nestjs/testing';
import { AnsController } from './ans.controller';

describe('AnsController', () => {
  let controller: AnsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnsController],
    }).compile();

    controller = module.get<AnsController>(AnsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
