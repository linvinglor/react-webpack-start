// 加载模块 react
import React from "react"
// 加载模块 react-dom
import ReactDOM from "react-dom"

// 加载组件
// .jsx 后缀如果没有设置 默认必须要写
import Hello from "./components/Hello"

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