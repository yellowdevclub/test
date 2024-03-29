const path = require("path");

module.exports = {
	entry: "./src/index.js",
	mode: "decelopment",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				use: "babel-loader"
			}
		]
	}
}