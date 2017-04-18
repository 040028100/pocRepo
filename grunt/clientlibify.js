module.exports={
	clientlibify: {
		options: {
		  dest: 'dist',
		  cssDir: 'compiled/css',
		  jsDir: 'compiled/js',
		  //assetsDirs: ['assets/images', 'assets/fonts'],
		  installPackage: false,
		  categories: ['/content/dam/delta-applications/js/cicdpoc'],
		  embed: [],
		  //dependencies: ['cq-jquery'],
			
		  // package options 
		  packageName: 'cicd-poc',
		  packageVersion: '1.0',
		  packageGroup: 'myPackages',
		  packageDescription: 'POC - UI CICD Package'
		}
	}
}