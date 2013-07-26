/*
 * grunt-multisync
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('multisync', 'Sync multiple folder pairs across locations', function () {

		if (typeof this.data.drives === 'undefined') {
			grunt.log.error("drive config not found.");
			grunt.fail.warn("You must configure some drive paths.");
		}

		if (typeof this.data.drives.src === 'undefined') {
			grunt.log.error("src drive config not found.");
			grunt.fail.warn("You must configure the source drive path.");
		}

		if (typeof this.data.drives.dest === 'undefined') {
			grunt.log.error("dest drive config not found.");
			grunt.fail.warn("You must configure the destination drive path.");
		}


		// load, check & process config..

		grunt.log.writeln(JSON.stringify(this));
		//grunt.log.writeln(JSON.stringify(grunt.config.get('multisync.job1')));return;

	});

};
