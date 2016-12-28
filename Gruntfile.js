(function () {
    "use strict";
    /*jslint node: true*/

    module.exports = function (grunt) {

        require('time-grunt')(grunt);

        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                options: {
                    mangle: true,
                    compress: {
                        drop_console: true
                    }
                },
                uglifyJs: {
                    files: {
                        'js/min/script.js': ['js/script.js']                        
                    }
                }
            },
            watch: {
                scss: {
                    files: ['scss/*.scss'],
                    tasks: ['compass:dev', 'autoprefixer'],
                    options: {
                        event: ["changed"],
                        spawn: false
                    }
                }
            },
            browserSync: {
                dev: {
                    options: {
                        proxy: "localhost",
                        files: ["css/main.css", "index.html", "js/script.js"],
                        logLevel: "silent", // info or debug
                        watchTask: true
                    }
                }
            },
            jshint: {
                all: {
                    src: ['js/script.js']
                },
                options: {
                    jshintrc: '.jshintrc'
                }
            },
            compass: {
                dev: {
                    options: {
                        debugInfo: false,
                        config: 'config.rb'
                    }
                }
            },
            autoprefixer: {
                dev: {
                    options: {
                        browsers: ["Firefox ESR", "Opera 12", "ff >= 10", "ios >= 5", "ie > 8"],
                        silent: true
                    },
                    src: "css/main.css"
                }

            }
        });



        grunt.loadNpmTasks('grunt-contrib-compass');
        grunt.loadNpmTasks('grunt-autoprefixer');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-browser-sync');
        grunt.loadNpmTasks('grunt-contrib-uglify');

        // define default task
        grunt.registerTask('default', ['browserSync', 'watch']);

    };

}());
