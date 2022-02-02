const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("responds with Hello Bossssssss!", (done) => {
    request(app).get("/").expect("Hello Bossssssss!", done);
  });
});
