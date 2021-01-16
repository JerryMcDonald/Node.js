var expect  = require('chai').expect;
var request = require('request');

it('status', function(done) {
    request('http://localhost:3000/sdfsdf' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});