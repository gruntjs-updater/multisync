/*
 * grunt-multisync
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

var processor = require('./lib/processor.js'),
		utils = require('./lib/utils.js'),
		validation = require('./lib/validation.js');

'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('multisync', 'Sync multiple folder pairs across locations', function () {

		//grunt.log.writeln(utils.jsonify(this));

		this.data.nameArgs = this.nameArgs;

		validation.checkDriveConfig(grunt, this.data);
		validation.checkFoldersConfig(grunt, this.data);
		utils.expandDrivePaths(grunt, this.data);
		validation.checkDrivesMounted(grunt, this.data);
		processor.buildRsyncOptions(grunt, this.data);

	});

};
