const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("responds with Hello Saurabh!", (done) => {
    request(app).get("/").expect("Hello Saurabh!", done);
  });
});
