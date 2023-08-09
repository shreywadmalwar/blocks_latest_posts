module.exports = function (grunt) {
	grunt.initConfig({});

	grunt.registerTask('run', function () {
		console.log('im runing');
	});
	grunt.registerTask('sleep', function () {
		console.log('im sleepiung');
	});
	grunt.registerTask('all', ['run', 'sleep']);
};
