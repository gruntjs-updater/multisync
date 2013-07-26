/*
 * grunt-multisync utils
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

var utils = require('utils.js');

'use strict';

module.exports = {

	checkDriveConfig: function(grunt, data) {
		// check inputs
		if (typeof data.drives === 'undefined') {
			grunt.log.error("drive config not found.");
			grunt.fail.warn("You must configure some drive paths.");
		}

		if (typeof data.drives.src === 'undefined') {
			grunt.log.error("src drive config not found.");
			grunt.fail.warn("You must configure the source drive path.");
		}

		if (typeof data.drives.dest === 'undefined') {
			grunt.log.error("dest drive config not found.");
			grunt.fail.warn("You must configure the destination drive path.");
		}
	},

	checkFoldersConfig: function(grunt, data) {
		// check inputs
		if (typeof data.folders === 'undefined') {
			grunt.log.error("folder config not found.");
			grunt.fail.warn("You must configure some folders to copy.");
		}

		for (var i=0, j=1; i < data.folders.length; i++, j++) {
			if (typeof data.folders[i].src === 'undefined') {
				grunt.log.error("src drive config not found for folder: "+j);
				grunt.fail.warn("Please check to see if any folders are missing src parameters");
			}

			if (typeof data.folders[i].dest === 'undefined') {
				grunt.log.error("dest drive config not found for folder: "+j);
				grunt.fail.warn("Please check to see if any folders are missing dest parameters");
			}
		}
	},

	expandDrivePaths: function(grunt, data) {

	},

	checkDrivesMounted: function(grunt, data) {
		utils.driveMounted(grunt, 'src', data.drives.src);
		utils.driveMounted(grunt, 'dest', data.drives.dest);
	}



};
