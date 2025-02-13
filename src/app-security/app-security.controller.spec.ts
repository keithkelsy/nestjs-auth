import { Test, TestingModule } from '@nestjs/testing';
import { AppSecurityController } from './app-security.controller';

describe('AppSecurityController', () => {
  let controller: AppSecurityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppSecurityController],
    }).compile();

    controller = module.get<AppSecurityController>(AppSecurityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
