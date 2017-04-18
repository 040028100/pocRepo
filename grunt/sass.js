module.exports = {
	default: {
		files: [{
			expand: true,
			cwd: 'preprocessed/stylesheets/',
			src: ['*.scss'],
			dest: 'compiled/stylesheets/',
			ext: '.css'
		}],
		options: {
			style: 'expanded'
		}
	},
	gruntdev: {
		// for testing grunt development
	}
};