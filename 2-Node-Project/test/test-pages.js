var expect  = require('chai').expect;
var request = require('request');


describe('#PageTests()', function() {

    context('Error Page', function() {
        it('status', function(done) {
            request('http://localhost:3000/sdfsdf' , function(error, response, body) {
                console.log('response', response);
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    })

});