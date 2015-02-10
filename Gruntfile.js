module.exports = function(grunt) {

    'use strict';

    // Load all grunt tasks
    // --------------------------
    require('load-grunt-tasks')(grunt);


    // Init Config
    // --------------------------
    var appConfig = {

        // Dirs
        dirs: {
            js:   'assets/js',
            css:  'assets/css',
            cssboot: 'bower_components/bootstrap/dist/css',
            jsboot: 'bower_components/bootstrap/dist/js',
            images: 'assets/images'
        },

        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner:
        "/*" +
        " * -------------------------------------------------------\n" +
        " * Project: <%= pkg.title %>\n" +
        " * Version: <%= pkg.version %>\n" +
        " * Author: <%= pkg.author.name %> (<%= pkg.author.email %>)\n" +
        " *\n" +
        " * Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.title %>\n" +
        " * -------------------------------------------------------\n" +
        " */\n",


        // Watch Task
        watch: {
            html: {
                files: '*.php'
            },
            css: {
                files: ['<%= dirs.css %>/*.css', '<%= dirs.cssboot %>/*.css'],
                tasks: ['cssmin']
            },
            js:{
                files: ['<%= dirs.js %>/*.js', '<%= dirs.jsboot %>/*.js'],
                tasks: ['uglify']
            },
            options: {
                livereload: true
            }
        },


        // CSS Minify
        cssmin: {
            dist: {
                files: {
                    '<%= dirs.css %>/build/style.min.css': [ '<%= dirs.cssboot %>/*.css', '<%= dirs.css %>/normalize.css', '<%= dirs.css %>/style.css', '<%= dirs.css %>/responsive.css']
                }
            }
        },

        
        // JS Concat and Minify
        uglify: {
            options: {
                mangle: false,
                banner: '<%= banner %>'
            },
            dist: {
                files: {
                    '<%= dirs.js %>/build/all.min.js': [ '<%= dirs.js %>/jquery/*.js', '<%= dirs.js %>/*.js', '<%= dirs.jsboot %>/*.js'  ]
                }
            }
        },

        // Image minify
        imagemin: {
            options: {
                cache: false
            },
            image_app: {
                files: [{
                    expand: true,
                    cwd: '<%= dirs.images %>',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= dirs.images %>/build'
                }]
            }
        }           


    };

    grunt.initConfig(appConfig);


    // Register tasks
    // --------------------------
    grunt.registerTask( 'default', ['uglify', 'cssmin', 'watch' ]);
    grunt.registerTask( 'images', ['imagemin']);

};
