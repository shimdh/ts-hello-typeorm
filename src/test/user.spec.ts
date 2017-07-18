import * as chai from "chai";
import * as mocha from "mocha";
import chaiHttp = require("chai-http");

import app from "../App";

chai.use(chaiHttp);
const expect = chai.expect;

describe("GET api/v1/users", () => {

    it("responds with JSON array", () => {
        return chai.request(app).get("/api/v1/users")
            .then((res) => {
                expect(res.status).to.equal(200);
                // tslint:disable-next-line:no-unused-expression
                expect(res).to.be.json;
                expect(res.body).to.be.an("array");
                expect(res.body).to.have.length(5);
            });
    });

    it("should include Wolverine", () => {
        return chai.request(app).get("/api/v1/users")
            .then((res) => {
                const Wolverine = res.body.find((user: any) => user.name === "Wolverine");
                // tslint:disable-next-line:no-unused-expression
                expect(Wolverine).to.exist;
                expect(Wolverine).to.have.all.keys([
                    "id",
                    "name",
                    "aliases",
                    "occupation",
                    "gender",
                    "height",
                    "hair",
                    "eyes",
                    "powers",
                ]);
            });
    });

    describe("GET api/v1/users/:id", () => {

        it("responds with single JSON object", () => {
            return chai.request(app).get("/api/v1/users/1")
                .then((res) => {
                    expect(res.status).to.equal(200);
                    // tslint:disable-next-line:no-unused-expression
                    expect(res).to.be.json;
                    expect(res.body).to.be.an("object");
                });
        });

        it("should return Luke Cage", () => {
            return chai.request(app).get("/api/v1/users/1")
                .then((res) => {
                    expect(res.body.user.name).to.equal("Luke Cage");
                });
        });

    });

});
