/*
 * grunt-multisync
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

var processor = require('./lib/processor.js'),
		utils = require('./lib/utils.js'),
		validation = require('./lib/validation.js'),
		_ = require('underscore');

'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('multisync', 'Sync multiple folder pairs across locations', function () {

		validation.checkDriveConfig(grunt, this.data);
		validation.checkFoldersConfig(grunt, this.data);

		// todo: come back to this once we are running
		//validation.expandDrivePaths(grunt, this.data);
		//validation.checkDrivesMounted(grunt, this.data);

		processor.buildRsyncOptions(grunt, this.data);



		//grunt.log.writeln(utils.jsonify(grunt.config.get()));
		//grunt.log.writeln(utils.jsonify(this.data.);

		//grunt.log.writeln(JSON.stringify(this));
		//grunt.log.writeln(JSON.stringify(grunt.config.get('multisync.job1')));return;

	});

};
