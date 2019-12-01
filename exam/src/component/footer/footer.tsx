import React, { Component } from 'react'

interface Foot {//定义一个接口校验类型
    FooterList: any[]
}
class Footer extends Component<any> {
    state: Foot = {//校验state下的类型
        FooterList: [
            {
                name: "首页",
                path: "/home"
            }, {
                name: "分类",
                path: "/fenlei"
            }, {
                name: "发现",
                path: "/faxian"
            }, {
                name: "我的学习",
                path: "/study"
            }, {
                name: "账号",
                path: "/user"
            },
        ]
    }
    JumpRoute(item: any) {//跳转路由
        this.props.prop.history.push(item.path)
    }
    render() {
        let { FooterList } = this.state
        return (
            <>
                {
                    FooterList.map((item: any, index: number) => {//渲染
                        return <li onClick={() => { this.JumpRoute(item) }} key={index}>
                            {item.name}
                        </li>
                    })
                }
            </>
        );
    }
}

export default Footer;