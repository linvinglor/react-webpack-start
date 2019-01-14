// 加载模块 react
import React from "react"
// 加载组件样式
import cssMyItem from "@/css/MyItem.scss";
// 创建子组件
export default function MyItem(props) {
    return <div className={cssMyItem.textBox+" cool"}>
                <h3 className={cssMyItem.title}>评论人: {props.name}</h3>
                <p className={cssMyItem.contents}>评论内容: {props.contents}</p>
            </div>
}
