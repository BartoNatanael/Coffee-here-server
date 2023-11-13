import { Test, TestingModule } from '@nestjs/testing';
import { RoasteryService } from './roastery.service';

describe('RoasteryService', () => {
  let service: RoasteryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoasteryService],
    }).compile();

    service = module.get<RoasteryService>(RoasteryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
