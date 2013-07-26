/*
 * grunt-multisync
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

var utils = require('./lib/utils.js'),
		rsync = require("rsyncwrapper").rsync;
		//rsync(options,[callback]);

'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('multisync', 'Sync multiple folder pairs across locations', function () {

		utils.checkDriveConfig(grunt, this.data);
		utils.checkFoldersConfig(grunt, this.data);
		utils.expandDrivePaths(grunt, this.data);
		utils.checkDrivesMounted(grunt, this.data);


		grunt.log.writeln(JSON.stringify(this));
		//grunt.log.writeln(JSON.stringify(grunt.config.get('multisync.job1')));return;

	});

};
