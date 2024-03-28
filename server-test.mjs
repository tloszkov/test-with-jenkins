import { expect } from "chai";
import request from "supertest";
import app from "./server.mjs";
import { describe, it } from 'mocha';

describe("Server", () => {
  describe("GET /", () => {
    it("should return welcome message", async () => {
      const res = await request(app).get("/");
      expect(res.status).to.equal(200);
      expect(res.text).to.equal("Welcome to my server!");
    });
  });

  describe("GET /hello", () => {
    it("should return hello message", async () => {
      const res = await request(app).get("/hello");
      expect(res.status).to.equal(200);
      expect(res.text).to.equal("Hello World!");
    });
  });

  describe("GET /healthcheck", () => {
    it("should return 200 status", async () => {
      const res = await request(app).get("/healthcheck");
      expect(res.status).to.equal(200);
      expect(res.text).to.equal("Server is up!");
    });
  });
});
