const request = require("supertest");
const app = require("./app");

describe("API Tests", () => {

    test("GET /health should return UP", async () => {

        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("UP");

    });

});
