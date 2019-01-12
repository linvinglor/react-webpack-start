// 加载模块 react
import React from "react"


// 加载子组件
import MyItem from "@/components/MyItem";

// 加载组件样式
import cssMyList from "@/css/MyList.css";
// 创建 MyList主组件
export default class MyList extends React.Component {
    constructor() {
        super();
        this.state = {
            MyList: [
                {
                    id:1,
                    name: "jack",
                    contents: "哈哈哈哈"
                },
                {
                    id:2,
                    name: "rose",
                    contents: "呵呵呵呵"
                },
                {
                    id:3,
                    name: "marry",
                    contents: "嘿嘿嘿嘿"
                },
                {
                    id:4,
                    name: "tom",
                    contents: "嘻嘻嘻嘻"
                },
                {
                    id:5,
                    name: "jim",
                    contents: "哼哼哼哼"
                },
            ]
        }
    }

    render() {
        return <div>
            <h1 className={cssMyList.title}>这是评论列表</h1>
            {this.state.MyList.map(item=> <MyItem {...item} key={item.id}></MyItem>)}
        </div>
    };
}