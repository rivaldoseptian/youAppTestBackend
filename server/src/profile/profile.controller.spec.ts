import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('ProfileController (e2e)', () => {
  let app: INestApplication;
  let token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjFkYjc4NTU0MjViY2VlZmE5MmFlNyIsImlhdCI6MTY4NDE1MzAzNCwiZXhwIjoxNjg0NDEyMjM0fQ.cmeARaa9jY3UiUV5vVM5TYd9-5KYJivZ99ap0mTdmuY';
  let invalidtoken = 'jjakjshkdjhkjwdhkwndmasn';
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('GET /profile', () => {
    it('/api/getProfile (GET)', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/getProfile')
        .set('Authorization', token)
        .expect(200);

      expect(response.body).toBeDefined();
    });

    it('/api/getProfile (GET)', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/getProfile')
        .set('Authorization', invalidtoken)
        .expect(401);

      expect(response.body).toBeDefined();
    });
  });

  describe('POST/profile', () => {
    it('/api/createProfile (POST)', async () => {
      const profileDto = {};
      const response = await request(app.getHttpServer())
        .post('/api/createProfile')
        .set('Authorization', token)
        .send(profileDto)
        .expect(201);

      expect(response.body).toBeDefined();
    });

    it('/api/createProfile (POST)', async () => {
      const profileDto = {};
      const response = await request(app.getHttpServer())
        .post('/api/createProfile')
        .set('Authorization', invalidtoken)
        .send(profileDto)
        .expect(401);

      expect(response.body).toBeDefined();
    });
  });

  describe('PUT /profile', () => {
    it('/api/profile (PUT)', async () => {
      const profileDto = {};
      const response = await request(app.getHttpServer())
        .put('/api/profile')
        .set('Authorization', token)
        .send(profileDto)
        .expect(200);

      expect(response.body).toBeDefined();
    });
    it('/api/profile (PUT)', async () => {
      const profileDto = {};
      const response = await request(app.getHttpServer())
        .put('/api/profile')
        .set('Authorization', invalidtoken)
        .send(profileDto)
        .expect(401);

      expect(response.body).toBeDefined();
    });
  });
});
