var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './main.js',
	output: {
		path: './bundle',
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'css-loader'
			},

			{
				test: /\.svg/,
				loader: "file-loader"
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin()

	]
}

