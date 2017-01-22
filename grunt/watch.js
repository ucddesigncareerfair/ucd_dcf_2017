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
            'css'
        ]
    },
	
	html: {
        files: [
            'src/html/**/*.html'
        ],
        tasks: [
            'html'
        ]
    },
	script: {
        files: [
            'src/scripts/**/*'
        ],
        tasks: [
            'script'
        ]
    },
	layout: {
        files: [
            'src/layout/**/*'
        ],
        tasks: [
            'html'
        ]
    },
};
