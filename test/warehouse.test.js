import mongoose from "mongoose";
import supertest from "supertest";
import assert from "assert";
import { config } from "dotenv";
import app from "../app/app.js";

config();

const body = {
	name: "warehouse 1",
	address: "address 1",
};

beforeAll((done) => {
	mongoose.connect(
		process.env.MONGODBTESTURL,
		{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true },
		() => {
			console.log("database connected");
			done();
		}
	);
});

afterAll((done) => {
	mongoose.connection.db.dropDatabase(() => {
		mongoose.connection.close(() => done());
	});
});

describe("POST /warehouse", () => {
	it("responds code 201", (done) => {
		supertest(app)
			.post("/warehouse")
			.send(body)
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(201)
			.end((err, res) => {
				if (err) return done(err);
				assert("_id" in res.body, true);
				assert("name" in res.body, true);
				assert("address" in res.body, true);
				assert(res.body.name, "warehouse 1");
				assert(res.body.address, "address 1");
				done();
			});
	});
});

describe("POST /warehouse", () => {
	it("responds code 400", (done) => {
		supertest(app)
			.post("/warehouse")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(400)
			.end((err, res) => {
				if (err) return done(err);
				assert("code" in res.body, true);
				assert("message" in res.body, true);
				assert("fields" in res.body, true);
				done();
			});
	});
});
