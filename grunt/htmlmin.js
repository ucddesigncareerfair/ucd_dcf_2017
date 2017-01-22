module.exports = {

  target: {
	options: {
		removeComments: true,
		collapseWhitespace: true
	},
	files: [{
		expand: true,
		cwd: 'dist',
		src: ['**/*.html'],
		dest: 'dist'
	}]
  }

};