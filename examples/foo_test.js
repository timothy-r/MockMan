var assert = require('assert'),
    mockman = require('../lib/mockman');

describe('Mock Foo', function() {
    describe('getName', function(){
         it('returns Foo.name', function() {
            var name = 'Brian';
            var mock_foo = mockman.instance('Foo').shouldReceive('getName').any().willReturn(name).getMock();
            assert.equal(name, mock_foo.getName());
            mockman.close();
         });
    });
});
