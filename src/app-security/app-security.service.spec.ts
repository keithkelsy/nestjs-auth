import { Test, TestingModule } from '@nestjs/testing';
import { AppSecurityService } from './app-security.service';

describe('AppSecurityService', () => {
  let service: AppSecurityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppSecurityService],
    }).compile();

    service = module.get<AppSecurityService>(AppSecurityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
