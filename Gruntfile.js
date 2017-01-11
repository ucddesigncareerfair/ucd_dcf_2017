module.exports = function(grunt) {

    require('time-grunt')(grunt);
	
	require('jit-grunt')(grunt, {
		htmlbuild: 'grunt-html-build',
	});

    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });
	
};