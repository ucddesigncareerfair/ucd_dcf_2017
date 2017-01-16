module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    css: {
        files: [
            'src/css/*.css'
        ],
        tasks: [
            'myth'
        ]
    },
	
	html: {
        files: [
            'src/html/**/*.html'
        ],
        tasks: [
            'htmlbuild'
        ]
    },
};
