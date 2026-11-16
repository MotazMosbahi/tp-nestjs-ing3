import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { TravelService } from './travel.service.js';

describe('TravelService', () => {
  let service: TravelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelService],
    }).compile();

    service = module.get<TravelService>(TravelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all trips', () => {
    expect(service.findAll()).toEqual([
      { id: 1, name: 'to china', price: 9000 },
      { id: 2, name: 'to marrocco', price: 4000 },
    ]);
  });

  it('should return the trip matching its id', () => {
    expect(service.findOne(1)).toEqual({
      id: 1,
      name: 'to china',
      price: 9000,
    });
  });

  it('should throw when the trip does not exist', () => {
    expect(() => service.findOne(3)).toThrow(NotFoundException);
  });
});
