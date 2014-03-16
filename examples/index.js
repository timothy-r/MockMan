var assert = require('assert'),
	_ = require('underscore'),
	mockery = require('mockery'),
    mockman = require('../lib/mockman');

sut = function(date_time) {
    return date_time.toString();
}

describe('MockMan example one', function() {
    beforeEach(function() {
    });

    describe('Stub a method with a dummy object', function(){

         it('creating a dummy object should work for SUT', function() {
            // create Mock DateTime object with method toString()
            var dt = 'Saturday 14th March 2014, 9pm';
            var date_time = mockman.instance('DateTime').shouldReceive('toString').any().willReturn(dt).getMock();
        
            var result = sut(date_time);
            console.log(result);

            // clean up
            mockman.close();
        });
    });
});
