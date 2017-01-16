module.exports = {

    dynamic: {
		options: {
        optimizationLevel: 3,
		progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
      },
	files: [{
		expand: true,
		cwd: 'dist/img/',
		src: ['**/*.{png,jpg,gif,svg}'],
		dest: 'dist/img/'
	}]
    }
	
};