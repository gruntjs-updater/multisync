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

		this.data = grunt.config.get('multisync.'+this.args) || {};
		this.data.taskName = this.args[0];

		grunt.log.writeln(utils.jsonify(this.data));

		validation.checkDriveConfig(grunt, this.data);
		validation.checkFoldersConfig(grunt, this.data);
		utils.expandDrivePaths(grunt, this.data);
		validation.checkDrivesMounted(grunt, this.data);
		processor.buildRsyncOptions(grunt, this.data);

	});

	/**
	 * This is taken directly from the grunt-rsync wrapper.. All credit is due..
	 *
	 * I have imported the function directly for the moment because I have having
	 * problems calling the plugin interannly within my plugin without users needing
	 * to also install it.
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
