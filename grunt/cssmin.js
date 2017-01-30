module.exports = {

  cat: {
	files: [{
	  'dist/css/glob.css': ['src/css/*.css'],
	}]
  },
  min: {
	  files: [{
	  expand: true,
	  cwd: 'dist/css',
	  src: ['*.css'],
	  dest: 'dist/css'
	}]
  }

};