/*
 * c2djs-helper
 * https://github.com/Hou/GruntProject
 *
 * Copyright (c) 2017 life4fun.net
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var path = require('path');

    var upperCase = function (str) {
        var reg = /\b(\w)|\s(\w)|_(\w)/g;
        return str.replace(reg, function (m) {
            return m.toUpperCase();
        });
    };

    var fmtResName = function (filename, ver) {
        var s = filename.split('.');
        var first = s[0];
        var second = s[1];

        ver = ver || '';

        var tmp = first.split('.');
        var ret = '';
        for (var i = 0; i < tmp.length; i++) {
            ret += upperCase(tmp[i]);
        }

        return ret.replace(/_/g, '') + ver + '_' + second.toLowerCase();
    };

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('c2djs_helper', 'cocos2d-js helper.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            sort: false,
            extension: '*.png'
        });

        // to avoid the duplicate resource name in the res object
        var used_name = [];

        this.files.forEach(function (f) {
            var resource_file = '';

            resource_file += 'var res = {\n';
            var matched_files = grunt.file.expand({cwd: f.src.toString()}, ['**/' + options.extension]);

            if(options.sort === true) {
                matched_files.sort(function (a, b) {
                    var val1 = a['bold'].toLowerCase();
                    var val2 = b['bold'].toLowerCase();

                    if(val1 > val2) {
                        return 1;
                    } else if(val1 < val2) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
            }

            var lastedDir = '';

            matched_files.forEach(function (f) {
                var pathObj = path.parse(f);
                var dir = pathObj.dir.length > 0 ? pathObj.dir + '/' : '';
                var resName = fmtResName(pathObj.base);
                if(!used_name[resName]) {
                    used_name[resName] = 1;
                } else {
                    used_name[resName] = used_name[resName] + 1;
                    resName = fmtResName(pathObj.base, used_name[resName] - 1);
                }
                if(options.sort === true && lastedDir !== dir) {
                    if(dir === '') {
                        resource_file += ('\n');
                    } else {
                        resource_file += ('\t// Subdirectory: ' + dir + ', Order: [A-Z]\n');
                    }

                    lastedDir = dir;
                }
                resource_file += '\t' + resName + ': ' + '"' + f.src + dir + pathObj.base + '",\n';
            });

            resource_file += '};\n\n';
            resource_file += 'var g_resources = [];\n';
            resource_file += 'for (var i in res) {\n';
            resource_file += '\tg_resources.push(res[i]);\n';
            resource_file += '}\n';

            grunt.file.write(
                f.dest,
                resource_file
            );

            // Print a success message.
            grunt.log.writeln('File ' + f.dest + ' created.');
        });
    });
};
