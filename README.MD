### React学习须知

- 虚拟DOM
  - 以 JS对象的形式存在
- Diff算法 (different)
  - tree diff
    - 新旧DOM树对比
  - component diff
    - 组件级别对比
  - element diff
    - 元素对比



## React的使用

#### 快速创建webpack@4+项目

- 项目初始化

  - `npm init -y`

- 创建目录和文件

  - 创建项目根目录 (源代码目录)   `src`

  - 创建产品目录  `dist`

  - 在   `src`  目录下创建  `index.html` 

    - ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
      </head>
      <body>
          <div id="root"></div>
      </body>
      </html>
      ```

    - 入口文件  `index.js`

  - 执行命令  `npm i webpack webpack-cli -D`

  - 创建 webpack配置对象  `webpack.config.js` 

    - ```js
      module.exports = {    
          mode: "development" // 或者是 production
      }
      ```

      > **注意 : **  webpack@4+ 默认入口文件是   `index.js`  出口文件 是   `main.js`

  - 安装

    - 执行命令  `npm i webpack-dev-server -D`

  - 修改 package.json文件

    - ```json
      "scripts": {
          + "dev" : "webpack-dev-server --open --port 3000 --hot --host 127.0.0.1"
      }
      ```

  - 安装

    - 执行命令  `npm i html-webpack-plugin -D`

  - 修改 webpack配置对象  `webpack.config.js` 

    - ```js
      // 加载模块 path
      + const path = require("path");
      // 加载 html-webpack-plugin (自动生成 index.html 页面的插件)
      + const htmlWebpackPlugin = require("html-webpack-plugin");
      
      module.exports = {    
           mode: "development", // 或者是 production
           // 配置插件节点
           + plugins: [
           +   // 实例 html-webpack-plugin模块对象
           +   new htmlWebpackPlugin({
           +       // 指定模板页面
           +       template: path.join(__dirname, "src", "index.html"),
           +       // 指定模板页面名称
           +       filename: "index.html"
           +    })
           + ],
       }
      ```

#### 安装 React

- 执行命令  `npm i react react-dom -S`

- 修改 `index.js`

  - ```js
    // 加载模块 react
    + import React from "react"
    // 加载模块 react-dom
    + import ReactDOM from "react-dom"
    
    // 创建虚拟DOM元素
    + const element = React.createElement("h1",{
    +	id: "box",
    +    title: "isBox"
    + },'HELLO REACT!');
    
    // 使用 ReactDOM渲染到页面
    + ReactDOM.render(element,document.getElementById("root"));
    ```

#### 使用 JSX语法

- 执行命令 

  - 安装 babel
    - `npm i babel-core babel-loader@7 babel-plugin-transform-runtime -D`
    - `npm i babel-preset-env babel-preset-stage-0 -D`
  - 安装 JSX
    - `npm i babel-preset-react -D`

- 创建  `.babelrc`  配置文件

  - ```json
    {
        "presets": ["env", "stage-0","react"],
        "plugins": ["transform-runtime"]
    }
    ```

- 修改  `webpack.config.js`

  - ```js
    const path = require("path");
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
            })
        ],
        + // 第三方模块加载器
      	+ module: {
        +   // 文件匹配规则
        +   rules: [
        +      {
        +          // 处理 js文件
        +          test: /\.js|jsx$/,
        +          use: 'babel-loader',
        +          // 排除 node_modules文件夹下的 JS文件
        +          exclude: /node_modules/
        +      }
        +   ]
        + }
    }
    ```

    

#### 使用 JSX语法书写React

- 修改  `index.js`

- ```jsx
  // 加载模块 react
  import React from "react"
  // 加载模块 react-dom
  import ReactDOM from "react-dom"
  
  // 创建虚拟DOM元素
  // 参数: 
  // 1. 创建元素
  // 2. 属性对象
  // 3. 文本子节点
  // n. 其他子节点
  // const element = React.createElement("h1", {
  //     id: "box",
  //     title: "isBox"
  // }, 'HELLO REACT!');
  let name = 'Hichank';
  const element = <h1 id="box" title="isBox">HELLO REACT!
      <p>--- FROM: {name}</p>
  </h1>
  
  // 使用 ReactDOM渲染到页面
  // 参数:
  // 1. 被渲染元素
  // 2. 页面容器
  ReactDOM.render(element, document.getElementById("root"));
  ```

#### React组件

- ```jsx
  // 加载模块 react
  import React from "react"
  // 加载模块 react-dom
  import ReactDOM from "react-dom"
  
  // 创建组件
  function Hello(props) {
      // props接收数据
      return <h1>HELLO REACT! -- {props.name} -- {props.age} -- {props.hobby}</h1>
  }
  // 组件传值
  const user = {
      name: "jack",
      age: 18,
      hobby: "敲代码"
  }
  
  ReactDOM.render(<div>
      <Hello {...user}></Hello>
  </div>, document.getElementById("root"));
  ```

- 创建  `component` 组件目录

  - 创建 `Hello.jsx` 文件

  - ```jsx
    // 加载模块 react
    import React from "react"
    // 创建并输出组件
    export default function Hello(props) {
        console.log(props);
        // props接收数据
        return <h1>HELLO REACT! -- {props.name} -- {props.age} -- {props.hobby}</h1>
    }
    ```

  - 修改 `index.js` 文件

  - ```js
    // 加载模块 react
    import React from "react"
    // 加载模块 react-dom
    import ReactDOM from "react-dom"
    
    // 加载组件
    // .jsx 后缀如果没有设置 默认必须要写
    import Hello from "./components/Hello.jsx"
    
    // 组件传值
    const user = {
        name: "jack",
        age: 18,
        hobby: "敲代码"
    }
    
    ReactDOM.render(<div>
        {/* 这是注释: 利用ES6...语法传值 */}
        <Hello {...user}></Hello>
    </div>, document.getElementById("root"));
    ```

  - 配置 `.jsx` 文件自动识别

    - 修改 `webpack.config.js` 配置文件

    - ```js
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
              }]
          },
          // 加载路径
          resolve: {
              // 自动识别 文件后缀
              extensions: ['.js', '.json', '.jsx']
          }
      }
      ```

- 关于 ES6的 `class` 

  - ```js
    // 类与继承
    
    // -before
    // function Animal(name) {
    //     this.name = name;
    // }
    // Animal.prototype.showName = function() {
    //     console.log(this.name);
    // }
    // var jack = new Animal('jack');
    // jack.showName();
    
    
    // -now
    class Animal {
        // 静态方法
        static sayHi() {
            console.log('hi');
        };
    	static habit = "sleep";
    
        // constructor相当于构造函数
        constructor(name) {
            this.name = name;
        };
        // 而在原型中添加方法可直接写
        showName() {
            console.log(this.name);
        }
    }
    // let rose = new Animal('rose');
    // rose.showName();
    
    // 静态方法调用要用类名 不可以使用实例对象调用
    // Animal.sayHi();
    // console.log(Animal.habit);
    
    // - - - - - - - - - - -
    // 类的继承 (extends)
    class Cat extends Animal {
        constructor(name, color) {
            // super用来调用父类 (重点)
            super(name,color); 
            this.color = color;
        }
        showColor() {
            console.log(this.color);
        }
    }
    
    let tom = new Cat('Tom','skyblue');
    tom.showName();
    tom.showColor();
    // 静态方法调用
    Cat.sayHi();
    ```

#### 使用 `class关键字` 创建组件

- ```js
  // 加载模块 react
  import React from "react"
  // 加载模块 react-dom
  import ReactDOM from "react-dom"
  
  // 使用 class关键字创建组件
  class Hello extends React.Component {
      // constructor构造器
      constructor(params) {
          super();
          // 定义私有数据  --相当于 Vue.js的 data
          this.state = {
              msg: "这是Hello组件的私有数据"
          }
  
      };
      // render函数: 渲染组件所对应的虚拟DOM元素
      render() {
          // 接收数据直接用 this.props
          return <h1>这是Hello组件 
              <p>-- {this.props.name}</p>
              <p>-- {this.props.age}</p>
              <p>-- {this.props.hobby}</p>
              <p>{this.state.msg}</p>
          </h1>
      };
  
  }
  // 组件传值
  const user = {
      name: "jack",
      age: 18,
      hobby: "敲代码"
  }
  
  // 渲染到页面
  ReactDOM.render(<div>
      <Hello {...user}></Hello>
  </div>, document.getElementById("root"));
  ```

#### 适配 `.css` 文件

- 执行命令 `npm i style-loader css-loader -D`

- 修改 `webpack.config.js` 配置文件

- ```js
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
          rules: [
              {
              // 处理 js文件
              test: /\.(js|jsx)$/,
              use: 'babel-loader',
              // 排除 node_modules文件夹下的 JS文件
              exclude: /node_modules/
              },
              {
              // 处理 css文件
              test: /\.css$/,
              use: ['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]'],
              }
          ]
      },
      // 加载路径
      resolve: {
          // 自动识别 文件后缀
          extensions: ['.js', '.json', '.jsx','.vue'],
          // 路径匹配项
          alias: {
              "@": path.join(__dirname,"src")
          }
      }
  }
  ```



