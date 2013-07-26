/*
 * grunt-multisync
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

var processor = require('./lib/processor.js'),
		rsync = require("rsyncwrapper").rsync,
		utils = require('./lib/utils.js'),
		validation = require('./lib/validation.js'),
		_ = require('underscore');
		//rsync(options,[callback]);

'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('multisync', 'Sync multiple folder pairs across locations', function () {

		validation.checkDriveConfig(grunt, this.data);
		validation.checkFoldersConfig(grunt, this.data);

		// todo: come back to this once we are running
		//validation.expandDrivePaths(grunt, this.data);
		//validation.checkDrivesMounted(grunt, this.data);

		//processor.buildRsyncOptions(grunt, this.data);

		var options = {};
		var taskList = [];
		var dynamicTaskName = 'testing';

		for (var i = 0; i < this.data.folders.length; i++) {
			var folder = this.data.folders[i];
			var dynamic = folder; // clone?

			dynamic.src = this.data.drives.src+folder.src;
			dynamic.dest = this.data.drives.dest+folder.dest;

			// inject global options
			//_.extend(dynamic,this.data.options || {});

			//grunt.log.writeln(utils.jsonify(dynamic));

			options["dynamic_"+i] = {options: dynamic};
			taskList.push("rsync:dynamic_"+i);
		}

		grunt.config.set('rsync', options);
		grunt.registerTask(dynamicTaskName,taskList);
		grunt.task.run(dynamicTaskName)

		grunt.log.writeln(utils.jsonify(grunt.config.get()));
		//grunt.log.writeln(utils.jsonify(this.data.);

		//grunt.log.writeln(JSON.stringify(this));
		//grunt.log.writeln(JSON.stringify(grunt.config.get('multisync.job1')));return;

	});

};
