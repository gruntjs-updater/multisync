/*
 * grunt-multisync
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

	  shell: {
		  makedir: {
			  command: "mkdir -p tmp/fixtures"
		  }
	  },

    // Configuration to be run (and then tested).
    multisync: {
	    drives: {
		    InstallLocation: "~",
	    },
	    macbook: {
		    drives: {
			    src:    '<%= multisync.drives.InstallLocation %>',
			    dest:   '<%= multisync.drives.InstallLocation %>'
		    },
		    folders: [
					{src: '/test/fixtures/one/', dest: '/tmp/fixtures/one/'},
					{src: '/test/fixtures/one/', dest: '/tmp/fixtures/one-copied-twice/'},
					{src: '/test/fixtures/two/', dest: '/tmp/fixtures/two/'},
				],
				options: {
					recursive : true
				}
			}
    },
	  rsync: {

	  },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks("grunt-rsync");
	grunt.loadNpmTasks("grunt-shell");
	grunt.loadNpmTasks('grunt-release');


  grunt.registerTask('test', ['clean', 'shell', 'multisync:macbook', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};
