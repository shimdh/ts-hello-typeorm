import * as chai from "chai";
import * as mocha from "mocha";
import chaiHttp = require("chai-http");

import app from "../App";

chai.use(chaiHttp);
const expect = chai.expect;

describe("baseRoute", () => {

    it("should be json", (done) => {
        chai.request(app).get("/")
            .then((res) => {
                expect(res.type).to.eql("application/json");
                done();
            });
    });

    it("'should have a message prop", (done) => {
        chai.request(app).get("/")
            .then((res) => {
                expect(res.body.message).to.eql("Hello World!");
                done();
            });
    });

});
