const path =  require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
//HMR 热跟新
const webpack  = require("webpack");
const config = {
    mode: "development",
    resolve:{
        extensions:[ ".jsx", ".js", ".json"]
    },
    entry: path.join(__dirname, "src/app.jsx"), 
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer:{
        port:9000, 
        contentBase: path.join(__dirname, "dist"),
        hot: true
    },
    module:{
        rules:[
          
            {
                test: /\.jsx?/,
                exclude: "/node_modules/",
                use:{
                    loader:"babel-loader",
                    options:{
                        babelrc: false,
                        presets:[
                            require.resolve("@babel/preset-react"),
                            [require.resolve("@babel/preset-env",{modules:false})]
                        ],
                        
                    }
                }
            },
            {
                test: /\.less$/i,
                //exclude: "",
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                    {loader:"less-loader"}
                ]   
              
               
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            filename: "index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
module.exports =  config;