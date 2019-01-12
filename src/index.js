// 加载模块 react
import React from "react"
// 加载模块 react-dom
import ReactDOM from "react-dom"

// 加载组件 MyList
import MyList from "@/components/MyList";

// 渲染到页面
ReactDOM.render(<div>
    <MyList></MyList>
</div>, document.getElementById("root"));