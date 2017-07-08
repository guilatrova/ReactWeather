var webpack = require('webpack');
var defaultComponentsPath = 'app/components/';

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx',
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname, 
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: defaultComponentsPath + 'Main.jsx',
            Nav: defaultComponentsPath + 'Nav.jsx',
            Weather: defaultComponentsPath + 'Weather.jsx',
            WeatherForm: defaultComponentsPath + 'WeatherForm.jsx',
            WeatherMessage: defaultComponentsPath + 'WeatherMessage.jsx',
            About: defaultComponentsPath + 'About.jsx',
            Examples: defaultComponentsPath + 'Examples.jsx',            
            openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'inline-source-map'
};