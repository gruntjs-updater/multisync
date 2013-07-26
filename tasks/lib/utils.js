/*
 * grunt-multisync utils
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

'use strict';

module.exports = {
	
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
