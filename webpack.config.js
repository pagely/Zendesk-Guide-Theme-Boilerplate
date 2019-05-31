const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "script.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ],
	rules: [
    	{
      		test: /\.css$/,
      		use: ['style-loader', 'css-loader']
    	}
  	]
    },
    plugins: []
};
