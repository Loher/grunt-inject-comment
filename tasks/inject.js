/*
 * inject
 * 
 *
 * Copyright (c) 2014 Loher Francois
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('inject', 'Inject a comment at the end of your html and js files', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {

      // Concat specified files.
      var src = file.src.filter(function (filepath) {


        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var srcTmp = grunt.file.read(filepath);

        //Add the comment
        if(options.type === 'html'){
            srcTmp = srcTmp + "\n \n" + '<!-- ' + options.value +  ' -->';
        }

        else if(options.type === 'js'){
            srcTmp = srcTmp + "\n \n" + '// ' + options.value;
        }

        else{
            grunt.log.warn('The type ' + options.type + ' is not a correct value (have to be "html" or "js")');
            return false;
        }

        //write the file
        grunt.file.write(filepath, srcTmp);

        // Print a success message.
        grunt.log.writeln('The file ' + filepath + ' have been updated with the comment!');

        return grunt.file.read(filepath);
      })



    });
  });

};
