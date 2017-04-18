module.exports = {
	target : {
		files : [{
			expand : true,
			cwd : 'compiled/stylesheets/',
			src : ['*.css', '!*.min.css', '!*.css.map'],
			dest : 'compiled/stylesheets/',
			ext : '.min.css'
		}]
	}
}
