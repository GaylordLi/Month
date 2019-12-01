import React, { Component } from 'react'
import { connect } from 'dva'
interface State {
    is: boolean
    IsBlock: boolean
}
const MapShopStore = (store: any) => {
    return store
}//装饰器语法
@connect(MapShopStore)
class ShopCar extends Component<any> {

    state: State = {
        is: false,
        IsBlock: false,
    };
    componentDidMount() {

    }
    handClick(item: any) {
        this.props.dispatch({
            type: "Shop/Change",
            payload: item
        })
    }
    Changeis() {
        this.setState({//编辑状态修改
            is: !this.state.is
        })
    }
    handChange() {
        this.setState({
            IsBlock: !this.state.IsBlock
        })
        this.props.dispatch({
            type: "Shop/all",
        })
    }
    handcancel() {
        this.setState({
            IsBlock: !this.state.IsBlock
        })
        this.props.dispatch({
            type: "Shop/cancel",
        })
    }
    handDelete() {
        this.props.dispatch({
            type: "Shop/del",
        })
    }
    render() {
        let { Shop: { shopcar, summery, count } }: any = this.props
        return (
            <div className="SHopcar">
                {
                    shopcar.length > 0 ? shopcar.map((item: any, index: any) => {
                        return (
                            <div className="sitem">
                                <li className="lpic"></li>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.price}金币</p>
                                    {
                                        this.state.is ? <span className={item.is ? "CHange" : ""} onClick={() => { this.handClick(item) }}></span> : ""
                                    }
                                </div>
                            </div>
                        )
                    }) : "空空如也"
                }
                <button className="bianji" onClick={() => { this.Changeis() }}>{this.state.is ? "取消" : "编辑"}</button>
                {
                    this.state.is ? <div>
                        {
                            this.state.IsBlock ? <button className="all" onClick={() => { this.handcancel() }}>取消</button> : <button className="all" onClick={() => { this.handChange() }}>全选</button>
                        }
                        <button className="del" onClick={() => { this.handDelete() }}>删除</button></div> : ""
                }
                <h2>共{summery}元,共{count}件</h2>
            </div>
        );
    }
}

export default ShopCar;