

module.exports = function(grunt){

	grunt.initConfig({
		less: {
			debug: {
				options: {
					compress: false
				},
				expand: true,
				ext: '.debug.css',
				src: '../content/style/css/**/*.less',
				dest: ''
			},
			min: {
				options: {
					compress: true
				},
				expand: true,
				ext: '.min.css',
				src: '../content/style/css/**/*.less',
				dest: ''
			}
		},
		watch: {
			css: {
				files: '../content/style/css/**/*.less',
				tasks: ['less:debug', 'less:min'],
				options: {
					event: ['changed']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');


	grunt.registerTask('default', 'watch: css');
};