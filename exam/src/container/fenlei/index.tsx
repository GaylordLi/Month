import React, { Component } from 'react'
import Footer from '../../component/footer/footer'
import Bscroll from 'better-scroll'
import { connect } from 'dva'
import { getTop } from './getTop'
interface FenleiS {//定义一个接口判断state变量及类型
    newarr: any[],
    ind: number
}
const MapShopStore = (store: any) => {
    return store
}//装饰器语法
@connect(MapShopStore)


class Fenlei extends Component<any> {
    state: FenleiS = {//判断类型
        newarr: [],
        ind: 0,
    };
    componentDidMount() {
        let { Shop: { shoplist } }: any = this.props//获取仓库中的数据
        let arr: any[] = []
        shoplist.map((item: any, index: number) => {//循环获取高度
            if (item.status != 0) {
                let height: number = getTop(this.refs[item.status])//根据一个定义的方法获取高度
                arr.push(height)//放进一个新的数组
            }
        })
        this.setState({
            newarr: arr
        })
        let bscroll = new Bscroll(".right", {//new 一个BetterScroll
            probeType: 3,//设置他的滚动类型
            click: true,
            mouseWheel: true
        })
        bscroll.on("scroll", (e) => {//监听滚动事件
            this.state.newarr.forEach((item: any, index: number) => {
                if (Math.abs(e.y) >= item) {//根据滚动的高度来判断左侧的样式
                    this.setState({
                        ind: index
                    })
                }

            })
        })
    }
    TScroll(index: number) {//点击滚动到指定位置
        let bscroll = new Bscroll(".right", {//new 一个BetterScroll
            probeType: 3,
            click: true,
            mouseWheel: true
        })
        let height = this.state.newarr[index]//将高度赋值给一个变量
        if (index == 0) {//因为better-scroll这个插件在y等于0的时候没有动画，不会滚动，所以要判断一下
            bscroll.scrollTo(-0, -1, 1000)
        }
        bscroll.scrollTo(-0, -height, 1000)//正常滚动情况
        this.setState({
            ind: index//设置下标更改左侧样式
        })
    }
    JumpRoute(item: any) {
        this.props.history.push({ pathname: "/shop", state: item })
    }
    Jump() {
        let prp: any = this.props
        prp.history.push({ pathname: "/shopcar" })
    }
    render() {
        let { Shop: { shoplist } }: any = this.props//拿到数据渲染
        let { ind } = this.state//结构下标
        let newarr = shoplist.filter((item: any) => { return item.status != 0 })//筛选数据
        return (//渲染
            <div className="App">
                <div className="main">
                    <div className="header">

                    </div>
                    <div className="shopcar">
                        <div className="left">
                            {
                                newarr.map((item: any, index: number) => {
                                    return (
                                        <li key={index} onClick={() => { this.TScroll(index) }} className={ind == index ? "active" : ""}>{item.name}</li>
                                    )
                                })
                            }
                        </div>
                        <div className="right">
                            <div className="contant">
                                {
                                    shoplist.map((item: any, index: number) => {
                                        return (
                                            <>
                                                {
                                                    item.status != 0 ? <div key={index} className="big" ref={item.status}>{item.name}</div> : <div onClick={() => { this.JumpRoute(item) }} key={index} className="small">
                                                        <li className="pic"></li>
                                                        <li>{item.name}</li>
                                                    </div>
                                                }
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                    <button className="rshop" onClick={() => { this.Jump() }}>购物车</button>
                </div>
                <div className="footer">
                    <Footer prop={this.props}></Footer>
                </div>
            </div>
        );
    }
}

export default Fenlei;