
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
    },

    watch: {
      jade: {
        files: 'jade/*.jade',
        tasks: 'jade'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

}