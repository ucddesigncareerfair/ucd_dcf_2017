module.exports = {
	dist: {
		src: 'src/html/**/index.html',
		dest: 'dist/',
			options: {
				beautify: true,
				relative: true,
				basePath: 'src/html/',
				sections: {
					layout: {
							siteheader: 'src/layout/site-header.html',
							sitefooter: 'src/layout/site-footer.html',
							sitesvg: 'src/layout/site-svg.html',
							sitehead: 'src/layout/site-head.html',
							ariabutton: 'src/layout/ariabutton.js',
						}
				},
				data: {
					// Data to pass to templates
					version: "0.1.0",
					title: "test",
				},
			}
	}
}