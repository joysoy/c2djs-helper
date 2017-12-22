# c2djs-helper

> cocos2d-js helper. 与cocos2d-js项目配合使用。自动化读取指定目录（包括子目录）下的资源文件（指定后缀名筛选）然后生成resource.js文件。支持同名资源文件的自动重命名。

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install c2djs-helper --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('c2djs-helper');
```

## The "c2djs_helper" task

### Overview
In your project's Gruntfile, add a section named `c2djs_helper` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  c2djs_helper: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.sort
Type: `Boolean`
Default value: `false`

用于决定是否开启排序功能，默认情况下不开启。开启排序后，不同子目录下的资源会添加相应的注释。

#### options.extension
Type: `string`
Default value: `*.png`

指定需要读取的资源文件的扩展名，默认为png文件（`*.png`），如果需要指定多个扩展名，格式为`{*.png,*.jpg,*.JPEG}`

#### options.lazyLoadRegex
Type: `RegExp`
Default value: ``

指定不需要预先加载的资源名称的正则表达式，会在相应的位置添加过滤代码，以阻止匹配的资源被预先加载。置空或非法的RegExp对象将使该功能无效，默认情况下值为空。

#### options.withTTF
Type: `Boolean`
Default value: `false`

用于决定是否开启对TTF（字体）文件的支持。开启该选项，字体文件将会被载入，之后可以在cc.LabelTTF的调用中被使用。

### Usage Examples

#### Default Options
默认选项将不会对资源文件进行排序。读取的资源文件也只有png一种。

```js
grunt.initConfig({
  c2djs_helper: {
    options: {},
    files: {
      'dest/resource.js': ['res'],
    },
  },
});
```

#### Custom Options
自定义选项的例子里，`sort`选项开启了资源排序功能，开启排序后资源将根据目录及资源名称的升序进行排序。而`extension`选项指定了需要读取的资源文件的扩展名，这里指定的是读取png和jpg文件，最后`lazyLoadRegex`选项指示了那些不需要被预先加载的资源名称的匹配规则。

```js
grunt.initConfig({
  c2djs_helper: {
    options: {
      sort: true,
      extension: '{*.png,*.jpg,*.JPEG}',
      lazyLoadRegex: /LazyLoadImg_[0-9]{0,}_jpg/,
      withTTF: true
    },
    files: {
      'dest/resource.js': ['res'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
v 0.1.0
* 创建项目，实现基本功能。

v 0.1.2
* 修复部分错误。

v 0.2.0
* 新增非预加载资源过滤功能。

v 0.2.1
* 修复部分错误。

v 0.2.2
* 新增对文件名中`-`字符的处理。

v 0.2.3
* 新增对ttf(字体)文件的支持。
