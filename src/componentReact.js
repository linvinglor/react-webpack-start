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
    {/* 这是注释: 利用ES6...语法传值 */}
    <Hello {...user}></Hello>
</div>, document.getElementById("root"));