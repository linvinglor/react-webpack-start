// 加载模块 react
import React from "react"
// 创建并输出组件
export default function Hello(props) {
    console.log(props);
    // props接收数据
    return <h1>HELLO REACT! -- {props.name} -- {props.age} -- {props.hobby}</h1>
}
