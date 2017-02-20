'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.c2djs_helper = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    default_options: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/default/resource.js');
        var expected = grunt.file.read('test/expected/default/resource.js');
        test.equal(actual, expected, 'should describe what the default option(s) behavior is.');

        test.done();
    },
    custom_options: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/custom/resource.js');
        var expected = grunt.file.read('test/expected/custom/resource.js');
        test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

        test.done();
    },
};
