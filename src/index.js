// 加载模块 react
import React from "react"
// 加载模块 react-dom
import ReactDOM from "react-dom"

// 加载组件
import BindInputValue from "./components/BindInputValue";


// 渲染到页面
ReactDOM.render(<div>
    <BindInputValue></BindInputValue>
</div>, document.getElementById("root"));