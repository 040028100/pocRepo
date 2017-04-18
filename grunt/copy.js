 module.exports = {
	default: {
		files: [
			{expand: true, cwd: 'src/css/', src: ['**'], dest: 'compiled/css/'}
		]
	},
	gruntdev: {
		// for testing grunt development
	}
};
