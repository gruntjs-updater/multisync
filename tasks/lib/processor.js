/*
 * grunt-multisync
 * https://github.com/jaetask/multisync
 *
 * Copyright (c) 2013 Jae Task
 * Licensed under the MIT license.
 */

var utils = require('./utils.js'),
		_ = require('underscore');

'use strict';

module.exports = {

	buildRsyncOptions: function(grunt, data) {
		var options = {};
		var taskList = [];

		grunt.verbose.writeln('Generating '+ data.folders.length +' rsync tasks for multisync:' + data.taskName);

		for (var i = 0; i < data.folders.length; i++) {

			var counter = i+1;
			var folder = data.folders[i];
			var dynamic = folder; // clone?
			var dynamicTaskName = data.taskName+'_'+counter;

			grunt.verbose.writeln('Folder pair ('+dynamicTaskName+')');

			dynamic.src = data.drives.src+folder.src;
			dynamic.dest = data.drives.dest+folder.dest;

			grunt.verbose.writeln('- src: '+dynamic.src);
			grunt.verbose.writeln('- dest: '+dynamic.dest);

			// inject global options
			_.extend(dynamic,data.options || {});

			options[dynamicTaskName] = {options: dynamic};
			taskList.push("rsync:"+dynamicTaskName);
		}

		grunt.verbose.writeln('- rsync config set to:');
		grunt.verbose.writeln(utils.jsonify(options));
		grunt.verbose.writeln('- registered task with task list:');
		grunt.verbose.writeln(utils.jsonify(taskList));

		grunt.config.set('rsync', options);
		grunt.registerTask(data.taskName, taskList);
		grunt.task.run(data.taskName)
	}
};
