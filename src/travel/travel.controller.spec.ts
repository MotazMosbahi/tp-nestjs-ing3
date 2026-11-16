import { Test, TestingModule } from '@nestjs/testing';
import { TravelController } from './travel.controller.js';
import { TravelService } from './travel.service.js';

describe('TravelController', () => {
  let controller: TravelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelController],
      providers: [TravelService],
    }).compile();

    controller = module.get<TravelController>(TravelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the new travel planning message', () => {
    expect(controller.create()).toBe('planifierun nouveau voyage ici');
  });
});
