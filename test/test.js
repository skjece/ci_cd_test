const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("responds with Hello Saurabh sir!", (done) => {
    request(app).get("/").expect("Hello Saurabh sir!", done);
  });
});
