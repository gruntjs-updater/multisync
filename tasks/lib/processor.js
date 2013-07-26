/*
 * grunt-multisync
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

var utils = require('./utils.js'),
		_ = require('underscore'),
	rsync = require("rsyncwrapper").rsync;

'use strict';

module.exports = {

	buildRsyncOptions: function(grunt, data) {
		var options = {};
		var taskList = [];
		var dynamicTaskName = 'multisync_dynamic';

		for (var i = 0; i < data.folders.length; i++) {
			var folder = data.folders[i];
			var dynamic = folder; // clone?

			dynamic.src = data.drives.src+folder.src;
			dynamic.dest = data.drives.dest+folder.dest;

			// inject global options
			_.extend(dynamic,data.options || {});

			//grunt.log.writeln(utils.jsonify(dynamic));

			options["dynamic_"+i] = dynamic;
			taskList.push("rsync:dynamic_"+i);
		}

		grunt.config.set('rsync', options);
		grunt.registerTask(dynamicTaskName,taskList);
		grunt.task.run(dynamicTaskName)

		grunt.log.writeln(utils.jsonify(grunt.config.get()));
		//grunt.log.writeln(utils.jsonify(data));
	}
};
