const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    "mode": "development",
    "entry": "./client/index.tsx",
    "output": {
        "path": __dirname + '/dir',
        "filename": "bundle.js"
    },
    resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	
    "devtool": "source-map", 
    "module": {
        "rules": [
            {
                "enforce": "pre",
				"test":/\.(ts|tsx)$/,
				"use": [
					{
					  "options": {
						eslintPath: require.resolve('eslint'),

					  },
					  "loader": require.resolve('eslint-loader'),
					},
				],
                "exclude": /node_modules/,
              
                
            },
            { "test": /\.(t)sx?$/, loader: "ts-loader" },
      
            {
                "test": /\.html$/,
                "use": [
                    {
                        "loader": "html-loader"
                    }
                ]
            }
        ]
    },
    "plugins": [
        new HtmlWebPackPlugin({
            template: "./client/index.html",
            filename: "./index.html"
        })
    ]
}