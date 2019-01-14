// 加载模块 react
import React from "react"

// 输出组件
export default class BindInputValue extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: "哈哈哈"
        }
    }

    render() {
        return <div>
            <h1>bindInputValue组件</h1>
            <input value={this.state.msg} type="text" onChange={()=>this.updateText()}  ref="text"/>
            <p>{this.state.msg}</p>
        </div>
    }
    updateText = () => {
        this.setState({
            msg: this.refs.text.value
        })
    }
}