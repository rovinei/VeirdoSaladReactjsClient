import path from 'path';
import webpack from 'webpack';


export default  {
	entry: [
		path.join(__dirname, 'client/index.js')
	],
	output: {
		path: '/',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'client'),
				loaders: [ "babel-loader"]
			}
		]
	},
	resolve: {
		extensions: [ '.js' ]
	}
}