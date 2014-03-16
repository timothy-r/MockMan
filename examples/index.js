var assert = require('assert'),
	_ = require('underscore'),
	mockery = require('mockery'),
    mockman = require('../lib/mockman');

describe('MockMan example one', function() {
    
    describe('Stub a method with a dummy object', function(){

         it('creating a dummy object should work for SUT', function() {
            
            var sut = function(dt) { 
                return dt.call().toString();
            };

            // create Mock DateTime object with method toString()
            var dt = 'Saturday 14th March 2014, 9pm';
            var date_time = mockman.instance('DateTime').shouldReceive('toString').any().willReturn(dt).getMock();

            var result = sut(date_time);
            assert(result == dt);

            // clean up
            mockman.close();
        });
    });
});
