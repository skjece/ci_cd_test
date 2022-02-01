const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("responds with Hello Boss!", (done) => {
    request(app).get("/").expect("Hello Boss!", done);
  });
});
