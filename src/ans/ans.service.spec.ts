import { Test, TestingModule } from '@nestjs/testing';
import { AnsService } from './ans.service';

describe('AnsService', () => {
  let service: AnsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnsService],
    }).compile();

    service = module.get<AnsService>(AnsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
