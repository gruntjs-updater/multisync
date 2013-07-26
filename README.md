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
    drives: {
        MyHardDrive: "/Users/MyUserName",
        MyBackupDrive: "/Volumes/MyBackupDrive",
        MyOtherDrive: "/Volumes/MyOtherDrive",
        MySpareDrive: "/Volumes/MySpareDrive",
    },
    // Configure a job to back up multiple folder pairs from one drive to another
    job1: {
        drives: {
            src:    '<%= drives.MyHardDrive %>',
            dest:   '<%= drives.MyBackupDrive %>'
        },
        folders: {
            {src: '/TestFolder/', dest: '/test-folder'},
            {src: '/TestFolder2/', dest: '/TestFolder2'},
            {src: '/NamesDontHave/', dest: '/_to_be__the_same_'},
        },
        options: {
            // Global options go here
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

```js
grunt.initConfig({
  multisync: {
    drives: {
        MyHardDrive: "/Users/MyUserName",
        MyBackupDrive: "/Volumes/MyBackupDrive"
    },
    macbook: {
      drives: {
        src: '<%= drives.MyHardDrive %>',
        dest: '<%= drives.MyBackupDrive %>'
      }
    }
  },
})
```





### Options


#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  multisync: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  multisync: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
