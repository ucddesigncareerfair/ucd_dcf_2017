module.exports = {

  target: {
	files: [{
	  expand: true,
	  cwd: 'css',
	  src: ['*.css', '!*.min.css'],
	  dest: 'css'
	}]
  }

};