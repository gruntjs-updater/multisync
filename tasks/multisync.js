/*
 * grunt-multisync
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

var utils = require('./lib/utils.js');

'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('multisync', 'Sync multiple folder pairs across locations', function () {

		utils.checkDriveConfig(grunt, this.data);
		utils.checkFoldersConfig(grunt, this.data);

		// dont implement global option merging yet.. this can be done after syncing is working..



		grunt.log.writeln(JSON.stringify(this));
		//grunt.log.writeln(JSON.stringify(grunt.config.get('multisync.job1')));return;

	});

};
