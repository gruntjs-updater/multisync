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

	grunt.registerTask('multisync', 'Sync multiple folder pairs across locations', function () {

		this.data = grunt.config.get('multisync.'+this.args) || {};
		this.data.taskName = this.args[0];

		grunt.log.writeln(utils.jsonify(this.data));

		validation.checkDriveConfig(grunt, this.data);
		validation.checkFoldersConfig(grunt, this.data);
		utils.expandDrivePaths(grunt, this.data);
		validation.checkDrivesMounted(grunt, this.data);
		processor.buildRsyncOptions(grunt, this.data);

	});

};
