var path = require('path');//creates an absolute path for the path


module.exports = {//
	entry: "./app/assets/scripts/App.js",//tells whick file to look at to create its bundle
	output:{//tells where to bundle to
		path: path.resolve(__dirname, "./app/temp/scripts"),//generates and absolute path in the computer for webpack
		filename: "App.js"//control the name of the bundled file
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['env']
			}
		}]
	}
}