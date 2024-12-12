import request from 'supertest';
import app from '../../server';
import { describe, it } from 'node:test';
import expect from 'expect';

describe('Admin Authentication', () => {
  it('should login successfully with correct credentials', async () => {
    const response = await request(app)
      .post('/api/v1/admin/login')
      .send({ username: 'admin', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it('should fail with incorrect credentials', async () => {
    const response = await request(app)
      .post('/api/v1/admin/login')
      .send({ username: 'admin', password: 'wrongpassword' });

    expect(response.status).toBe(401);
  });
});