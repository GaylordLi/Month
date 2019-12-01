import React, { Component } from 'react'

class ShopCar extends Component {
    state = {};
    componentDidMount() {
        console.log(this.props)
    }
    handClick(item: any) {
        let prp: any = this.props
        prp.history.push({ pathname: "/detail", state: item })//跳详情
    }
    Jump() {
        let prp: any = this.props
        prp.history.push("/shopcar")//跳购物车
    }
    render() {
        let { history: { location: { state } } }: any = this.props//拿到数据渲染
        return (
            <div className="Shopcar">
                <div className="Header">
                    详情
                </div>
                {
                    <div onClick={() => { this.handClick(state) }} className="everitem">
                        <li className="img"></li>
                        <p>{`${state.name}${state.article}`}</p>
                    </div>
                }
                <button className="rshop" onClick={() => { this.Jump() }}>购物车</button>

            </div>
        );
    }
}

export default ShopCar;