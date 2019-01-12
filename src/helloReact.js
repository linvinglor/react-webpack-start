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
let title = "Let's learn React together!";
let flag = true;
const span = <span>内心: <i>求求你们别学了 跟不上了!</i></span>
const strong = <strong>React真香</strong>
const arr = [
    'iPhone',
    'iPad',
    'iPod',
    'MacBook Air',
    'MacBook Pro',
    'AirPods',
]

const element = <h1 id="box">HELLO REACT!
    <p title={title}>--- FROM: {name}</p>
    <hr/>
    {flag?span:strong}
    <hr/>
    {arr.map(item=>{
        return <p key={item} className="myclass" htmlFor="myfor">{item}</p>
    })}
</h1>

// 使用 ReactDOM渲染到页面
// 参数:
// 1. 被渲染元素
// 2. 页面容器
ReactDOM.render(element, document.getElementById("root"));