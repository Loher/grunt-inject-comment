# grunt-inject-comment

> Inject a comment at the end of your html and js files

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-inject-comment --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-inject-comment');
```

## The "inject_comment" task

### Overview
In your project's Gruntfile, add a section named `inject_comment` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  inject_comment: {
    options: {
      // Task-specific options go here.
    },
    files: {
      // Target-specific file lists and/or options go here.
	  //format is --> 'src': ['file1.html', 'file2.html', ...]
    },
  },
});
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
In this example, '// The comment to add' will be added at the end of all js files described in the 'src' fields. 

```js
grunt.initConfig({
  inject_comment: {
   options: {
		type: 'js',
		value: 'The comment to add'
	},
    files: {
      'src': ['src/testing.js', 'src/ctrl/*.js']
    }
  },
});
```

#### Custom Options

You can add several task, in this example you can see two tasks, one for js files and another for html files.

```js
            inject_comment: {
                js: {
                    options: {
                        value: 'My js files',
                        type: 'js'
                    },
                    files: {
                        'src': ['app/scripts/app.js', 'app/scripts/controllers/*.js']
                    }
                },

                html: {
                    options: {
                        value: 'My htlm files',
                        type: 'html'
                    },
                    files: {
                        'src': ['app/views/*.html']
                    }
                }

            }
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2014-03-14 // V 0.1.2 // First release
