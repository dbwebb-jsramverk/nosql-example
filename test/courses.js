process.env.NODE_ENV = 'test';

import * as chai from 'chai';
import { default as chaiHttp, request } from 'chai-http';
import server from '../app.js';

const { expect } = chai;

chai.use(chaiHttp);

describe('courses', () => {
    describe('GET /api/courses', () => {
        it('200 HAPPY PATH', (done) => {
            request.execute(server)
                .get("/api/courses")
                .end((err, res) => {
                    console.log(res)

                    expect(res).to.have.status(200);
                    // res.body.should.be.an("object");
                    // res.body.should.have("message");
                    // res.body.message.should.be("Simple mongodb api");

                    done();
                });
        });
    });
});
