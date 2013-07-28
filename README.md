# grunt-multisync

> syncing multiple folder pairs across drives/locations

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-multisync --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-multisync');
```

## The "multisync" task

### Overview
In your project's Gruntfile, add a section named `multisync` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  multisync: {
    options: {
        drives: {
            InstallLocation: "~",
            MyHardDrive: "/Users/MyUserName",
            MyBackupDrive: "/Volumes/MyBackupDrive",
            MyOtherDrive: "/Volumes/MyOtherDrive",
            MySpareDrive: "/Volumes/MySpareDrive",
        }
    },
    // Configure a job to back up multiple folder pairs from one drive to another
    laptop: {
        drives: {
            src:    '<%= multisync.options.drives.MyHardDrive %>',
            dest:   '<%= multisync.options.drives.MyBackupDrive %>'
        },
        folders: {
            {src: '/TestFolder/', dest: '/test-folder', recursive: false},
            {src: '/TestFolder2/', dest: '/TestFolder2'},
            {src: '/NamesDontHave/', dest: '/_to_be__the_same_'},
        },
        options: {
            // any rsyncwrapper options here get allpied to ALL folder pairs
            recursive: true,
            dryRun: false
        }
    }
  },
})
```

### Drives

Drive is a list of drives (or folders) that you want to copy files from or to.
In the example config we have two drives configured, a local hard drive 'MyHardDrive' and
a backup hard drive MyBackupDrive. In the next section where you configure a sync 'job' you can reference
these drives like this.

You can specify a "~" if you want to start in the current working directory of your plugin

```js
grunt.initConfig({
  multisync: {
    options: {
        drives: {
            MyHardDrive: "/Users/MyUserName",
            MyBackupDrive: "/Volumes/MyBackupDrive"
        }
    },
    macbook: {
      drives: {
        src: '<%= multisync.options.drives.MyHardDrive %>',
        dest: '<%= multisync.options.drives.MyBackupDrive %>'
      }
    }
  }
})
```

### Folders

Because multisync consumes the grunt-rsync plugin which uses rsyncwrapper, it exposes all of the options
that are available in rsyncwrapper.

```js
grunt-multisync
    grunt-rsync
        rsyncwrapper
```

Please see the rsyncwrapper plugin documentation for more info at https://github.com/jedrichards/rsyncwrapper/


### Options

Options are globally copied into all of the folder pairs.
When an option is already set in an individual folder pair the global option is ignored.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
V1.0.0 is coming today :)
