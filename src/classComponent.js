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