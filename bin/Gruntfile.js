

module.exports = function(grunt){

	grunt.initConfig({
		less: {
			debug: {
				options: {
					compress: false
				},
				expand: true,
				ext: '.debug.css',
				src: '../refactor/pages/**/*.less',
				dest: ''
			},
			min: {
				options: {
					compress: true
				},
				expand: true,
				ext: '.min.css',
				src: '../refactor/pages/**/*.less',
				dest: ''
			},
			global_debug: {
				options: {
					compress: false
				},
				expand: true,
				ext: '.debug.css',
				src: '../refactor/global/**/*.less',
				dest: ''
			},
			global_min: {
				options: {
					compress: true
				},
				expand: true,
				ext: '.min.css',
				src: '../refactor/global/**/*.less',
				dest: ''
			}
		},
		concat: {
			global_debug:{
				options: {
					separator:  '',
					banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> */ <%= grunt.util.linefeed %>'
				},
				src: '../refactor/global/**/*.debug.css',
				dest: '../content/style/css/global.debug.css'
			}	,
			global_min: {
				options: {
					separator: '',
					banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> */ <%= grunt.util.linefeed %>'
				},
				src: '../refactor/global/**/*.debug.css',
				dest: '../content/style/css/global.min.css'
			}
		},
		watch: {
			page: {
				files: '../refactor/pages/**/*.less',
				tasks: ['less:debug', 'less:min'],
				options: {
					event: ['changed']
				}
			},
			global: {
				files: '../refactor/global/**/*.less',
				tasks: ['less:global_debug', 'less:global_min', 'concat:global_debug', 'concat:global_min'],
				options: {
					event: ['changed']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');


	grunt.registerTask('default', 'watch: page');
};