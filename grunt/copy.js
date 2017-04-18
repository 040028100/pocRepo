 module.exports = {
	default: {
		files: [
			{expand: true, cwd: 'src/css/', src: ['**'], dest: 'compiled/css/'},
			{expand: true, cwd: 'src/clientlibifyConfig/', src: ['clientlibify.js'], dest: 'node_modules/grunt-clientlibify/tasks/'},
			{expand: true, cwd: 'src/clientlibifyConfig/', src: ['filter.xml'], dest: 'node_modules/grunt-clientlibify/tasks/templates/'}
		]
	},
	gruntdev: {
		// for testing grunt development
	}
};
