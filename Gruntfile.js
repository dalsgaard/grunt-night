
module.exports = function(grunt) {

  grunt.initConfig({

    jade: {
      devel: {
        options: {
          pretty: true
        },
        expand: true,
        cwd: 'jade',
        src: '*.jade',
        ext: '.html',
        dest: 'public'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');

}