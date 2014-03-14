# inject

> Inject a comment at the end of your html and js files

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install inject --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('inject');
```

## The "inject" task

### Overview
In your project's Gruntfile, add a section named `inject` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  inject: {
    options: {
      // Task-specific options go here.
    },
    files: {
      // Target-specific file lists and/or options go here.
	  //format is --> 'src': ['file1.html', 'file2.html', ...]
    },
  },
})
```

### Options

#### options.type
Type: `String`
Default value: `'html'`
Allowed values : 'html', 'js'

An indicator used by the plugin to add the comment in an html or a js files.

#### options.value
Type: `String`
Default value: `my comment`

The value of the comment that you want to add in your files.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  inject: {
    options: {
		type: 'js',
		value: 'The comment to add'
	},
    files: {
      'src': ['src/testing.js', 'src/ctrl/*.js']
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2014-03-14	V 0.1	First release

## License
Copyright (c) 2014 Loher Francois. Licensed under the MIT license.
