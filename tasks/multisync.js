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
		rsync = require("rsyncwrapper").rsync;

'use strict';

module.exports = function (grunt) {

	grunt.registerTask('multisync', 'Sync multiple folder pairs across locations', function () {

		var data = grunt.config.get('multisync.'+this.args) || {};
		data.taskName = this.args[0];

		grunt.verbose.writeln(utils.jsonify(data));

		validation.checkDriveConfig(grunt, data);
		validation.checkFoldersConfig(grunt, data);
		utils.expandDrivePaths(grunt, data);
		validation.checkDrivesMounted(grunt, data);
		processor.buildRsyncOptions(grunt, data);

	});

	/**
	 * This is taken directly from the grunt-rsync plugin.. All credit is due!
	 *
	 * I have imported the function directly for the moment because I am having
	 * problems calling the grunt-plugin internally from within my plugin without
	 * users needing to also install it.
	 *
	 * I want this to be a complete wrapper and will come back to this with some trickery :)
	 */
	grunt.task.registerMultiTask("rsync","Performs rsync tasks.",function () {

		var done = this.async();

		var options = this.options();

		var host = typeof options.host === "undefined" ? "" : options.host+":";

		grunt.log.write(options.src+" > "+host+options.dest);

		try {
			rsync(options,function (error,stdout,stderr,cmd) {
				if ( error ) {
					grunt.log.writeln(" error".red);
					grunt.log.writeln(cmd.grey);
					grunt.log.writeln(error.toString().red);
					done(false);
				} else {
					grunt.log.writeln(" done".green);
					grunt.log.writeln(cmd.grey);
					grunt.log.write(stdout);
					done(true);
				}
			});
		} catch (error) {
			grunt.log.writeln("\n"+error.toString().red);
			done(false);
		}
	});

};
