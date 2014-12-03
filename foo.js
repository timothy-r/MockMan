/**
*/
function Foo(name, age) {
    this.name = name;
    this.age = age;
};

Foo.prototype.getName = function() {
    return this.name;
};

module.exports = Foo;
