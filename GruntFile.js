module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            main: {
                files: [
                    { src: 'bower_components/angular/angular.js', dest: 'public/vendor/angular.js' },
                    { src: 'bower_components/angular-route/angular-route.js', dest: 'public/vendor/angular-route.js' }
                ]
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'public/ayeaye/**.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        concat : {
            options : {
                sourceMap :true
            },
            dist : {
                src  : [
                    'public/ayeaye/**.js',
                    'public/vendor/**.js'
                ],
                dest : 'public/.tmp/main.js'
            }
        },

        uglify : {
            options : {
                sourceMap : true,
                sourceMapIncludeSources : true,
                sourceMapIn : 'public/.tmp/main.js.map'
            },
            dist : {
                src  : '<%= concat.dist.dest %>',
                dest : 'public/js/main.min.js'
            }
        },

        clean : [
            'public/.tmp'
        ]


    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // task setup
    grunt.registerTask('default', [
        'copy',
        'jshint',
        'concat',
        'uglify',
        'clean'
    ]);

};