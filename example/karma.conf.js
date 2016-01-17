// Karma configuration
// Generated on Sat Feb 07 2015 11:18:42 GMT+0300 (Russia TZ 2 Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*Spec.js': ["webpack"]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // reporters: ['mocha', 'coverage'],
    reporters: ['progress', 'coverage'],

    coverageReporter: {
        // instrumenters: { isparta : require('isparta') },
        // instrumenter: {
        //     '**/*.js': 'isparta'
        // },
        type : 'html',
        dir : 'coverage/'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Include timeout because of rsync
    autoWatchBatchDelay: 800,

    webpack: {
        // cache: true,
        // watchDelay: 800,
        resolve: {
            root: [__dirname]
        },
        module: {
            preLoaders: [
                {test: /(\.jsx)|(\.js)$/, exclude: /(node_modules|bower_components|Spec)/, loader: 'isparta-instrumenter', query: { babel: {presets: ['es2015', 'react', 'stage-0']} } },
            ],
            loaders: [
                {test: /(react)|(react\/addons)$/, loader: 'expose?React!imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham'},
                {test: /(\.jsx)|(\.js)$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'react', 'stage-0'] } },
            ],
            // postLoaders: [
            //     {test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'isparta-instrumenter'}
            // ]
        }
    },

    webpackMiddleware: {
      stats: {
        // With console colors
        colors: true,
        // add the hash of the compilation
        hash: false,
        // add webpack version information
        version: false,
        // add timing information
        timings: false,
        // add assets information
        assets: false,
        // add chunk information
        chunks: false,
        // add built modules information to chunk information
        chunkModules: false,
        // add built modules information
        modules: false,
        // add also information about cached (not built) modules
        cached: false,
        // add information about the reasons why modules are included
        reasons: false,
        // add the source code of modules
        source: false,
        // add details to errors (like resolving log)
        errorDetails: false,
        // add the origins of chunks and chunk merging info
        chunkOrigins: false,
        // Add messages from child loaders
        children: false
      }
    },
  });
};
