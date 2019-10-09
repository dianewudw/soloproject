//require: enable plugins to perform injection of environment variables
const path = require("path");
const webpack = require("webpack");
const HTMLwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //possible to have multiple entries if making a multi-page appliction --> stick to one.
  entry: path.resolve(__dirname, './frontend/index.js'),
  //consider adding production mode afterwards
    mode:'development',
    module: {
        rules:[
            {
                //transforming our ES6 and JSX syntax for javascript and react: identify which files should be transformed
                test:/\.(js|jsx)$/,
                //will match anything outside of the node_modules and bower_component directories
                exclude:/(node_modules|bower_components)/,
                // allows webpack to process other types of files and convert them into valid modules 
                loader:'babel-loader',
                //option to use the global env. preset
                options:{presets:['@babel/env']}
            },
            {
                //processes CSS with style-loader and css loader
                test:/\.css$/,
                use:["style-loader", "css-loader"]
            }
        ]
    },
//options change how modules are resolved --> like path.resolve, will direct publicPath property("/dist/") which directory the bundle should go and where webpack-dev-server where to serve files from
    //i.e https://webpack.js.org/configuration/resolve/#resolvemodules
    resolve: { extensions: ["*", ".js", ".jsx"]},
    //output tells webpack how to write the compiled files to disk, only one output config. can be specified
    //allows to specify the base path for all assets within the application --> will be going to /dist/bundle.js
    output:{
        path: path.resolve(__dirname, "./frontend/dist/"),
         //if publicPath is set incorrectly, will get a 404 error
        publicPath: "/js",
        filename: "bundle.js"
    },
      //initiates webpack devServer path to be at "http://localhost:3000/dist" -->  location we're serving static files from, like index.html and port we're running the server on
    devServer:{
        publicPath: "/js",
        contentBase: path.resolve(__dirname, "./frontend/dist"),
        //publicPath here just tells the server where our bundled code is
        port:8080,
        //enables hot module replacement without page refresh as fallback in case of build failures 
        hotOnly: true,
        proxy: {
          '/api': 'http://localhost:3000/'
        },     
    },
    //global constant: array of webpack plugins that will be configured at compile time
    //using this plugin so we don't have to constantly refresh to see our changes
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HTMLwebpackPlugin({
        title: "Tales of Wucifier 2",
        template: "index.html"
      })
    ]
}