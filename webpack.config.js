// 加载模块 path
const path = require("path");
// 加载 html-webpack-plugin (自动生成 index.html 页面的插件)
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development", // 或者是 production
    // 配置插件节点
    plugins: [
        // 实例 html-webpack-plugin模块对象
        new htmlWebpackPlugin({
            // 指定模板页面
            template: path.join(__dirname, "src", "index.html"),
            // 指定模板页面名称
            filename: "index.html"
        }),
    ],
    // 第三方模块加载器
    module: {
        // 文件匹配规则
        rules: [{
                // 处理 js文件
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                // 排除 node_modules文件夹下的 JS文件
                exclude: /node_modules/
            },
            {
                // 处理 css文件
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                // 处理图片
                test: /\.jpg|png|gif|bmp|jpeg$/,
                use: 'url-loader?limit=1850894&name=[hash:8]-[name].[ext]'
            },
            {
                // 处理字体
                test: /\.(ttf|woff2|svg|eot|woff)$/,
                use: 'url-loader'
            },
            {
                // 处理 less文件
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                // 处理 sass文件
                test: /\.scss$/,
                use: ['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]','sass-loader']
            },
        ]
    },
    // 加载路径
    resolve: {
        // 自动识别 文件后缀
        extensions: ['.js', '.json', '.jsx', '.vue'],
        alias: {
            "@": path.join(__dirname, "src")
        }
    }
}