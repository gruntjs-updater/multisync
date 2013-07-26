/*
 * grunt-multisync
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

var rsync = require("rsyncwrapper").rsync,
		utils = require('./lib/utils.js'),
		validation = require('./lib/validation.js');
		//rsync(options,[callback]);

'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('multisync', 'Sync multiple folder pairs across locations', function () {

		validation.checkDriveConfig(grunt, this.data);
		validation.checkFoldersConfig(grunt, this.data);
		validation.expandDrivePaths(grunt, this.data);
		validation.checkDrivesMounted(grunt, this.data);


		grunt.log.writeln(JSON.stringify(this));
		//grunt.log.writeln(JSON.stringify(grunt.config.get('multisync.job1')));return;

	});

};
