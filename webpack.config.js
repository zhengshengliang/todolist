var webpack = require('webpck');

module.exports = {
	entry: [
		"webpck-dev-server/client?http://127.0.0.1:8080",
		"webpck/hot/only-dev-server",
		__dirname + "/src/index.js"
	],

	output: {
		path: __dirname,
		filename: "/build/bundle.js"
	},

	module: {
		loaders: [{
			test: /\.js?$/, exclude: /node_modules/, loader: 'babel' // 除了node_modules目录下的都用babel去转化
		}, {
			test: /\.css?$/, loader: 'style!css' // 遇到所有的.css文件
		}]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin() // webpack热替换插件
	],
}