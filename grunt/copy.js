module.exports = {

  cname: {
	files: [
		{expand: true, cwd: './', src: ['CNAME'], dest: 'dist'},
	]
  },
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