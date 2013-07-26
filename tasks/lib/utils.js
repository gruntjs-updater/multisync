/*
 * grunt-multisync utils
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

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

	checkDrivesMounted: function(grunt, data) {
		this.driveMounted(grunt, 'src', data.drives.src);
		this.driveMounted(grunt, 'dest', data.drives.dest);
	},

	driveMounted: function(grunt, name, mountPoint) {
		if (this.folderExists(mountPoint) === false) {
			grunt.log.error(name+' not mounted: '+mountPoint);
			grunt.fail.warn("Drive not mounted.. Please check your system");
		}
	},

	folderExists: function(folder) {
		try {
			return fs.lstatSync(folder).isDirectory();
		}
		catch (e) {}
		return false
	}

};
