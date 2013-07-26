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


    // Configuration to be run (and then tested).
    multisync: {
	    drives: {
		    InstallLocation: "~",
		    MyHardDrive: "/Users/MyUserName",
		    MyBackupDrive: "/Volumes/MyBackupDrive",
		    MyOtherDrive: "/Volumes/MyOtherDrive",
		    MySpareDrive: "/Volumes/MySpareDrive",
	    },
	    macbook: {
		    drives: {
			    src:    '<%= multisync.drives.MyHardDrive %>',
			    dest:   '<%= multisync.drives.MyBackupDrive %>'
		    },
		    folders: [
					{src: '/TestFolder/', dest: '/test-folder'},
					{src: '/TestFolder2/', dest: '/TestFolder2'},
					{src: '/NamesDontHave/', dest: '/_to_be__the_same_'},
				],
				options: {
					// Global options go here
				}
			}
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

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'multisync', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
