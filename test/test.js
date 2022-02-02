const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("responds with Hello !", (done) => {
    request(app).get("/").expect("Hello !", done);
  });
});
