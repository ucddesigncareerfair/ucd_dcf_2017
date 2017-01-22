module.exports = {

  img: {
	files: [
		{expand: true, cwd: 'src/img', src: ['**'], dest: 'dist/img'},
	]
  },
  script: {
	files: [
		{expand: true, cwd: 'src/scripts', src: ['**'], dest: 'dist/scripts'},
	]
  }

};