import { Test, TestingModule } from "@nestjs/testing";
import { RoasteryController } from "./roastery.controller";
import { RoasteryService } from "./roastery.service";

describe('RoasteryController', () => {
  let controller: RoasteryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoasteryController],
      providers: [RoasteryService],
    }).compile();

    controller = module.get<RoasteryController>(RoasteryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
