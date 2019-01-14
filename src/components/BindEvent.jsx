// 加载模块 react
import React from "react"

// 输出组件
export default class BindEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            msg : "哈哈哈"
        }
    }

    render() {
        return <div>
            BindEvent组件
            <hr/>
            <button onClick={ ()=>this.show('🐖')}>按钮</button>
            <h1>{this.state.msg}</h1>
        </div>
    }
    show = (something) => {
        this.setState({
            msg: something
        },function() {
            // 如果要拿到最新数据 需要在 setState()方法的回调函数中拿到最新数据
            console.log(this.state.msg);
        })
        // 因为 this.setState()方法是异步的 下面输出的依旧是原始值
        console.log(this.state.msg);
    }
}