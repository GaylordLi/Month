import React, { Component } from 'react'
import { connect } from 'dva'
const MapAddShop = (store: any) => {
    return store
}
@connect(MapAddShop)
class Detail extends Component<any>{
    state = {};
    componentDidMount() {

    }
    AddShopCara(state: any) {
        this.props.dispatch({//dispatch一个type到仓库
            type: "Shop/AddShopCar",
            payload: state
        })
    }
    render() {
        let { history: { location: { state } } }: any = this.props//拿到数据渲染
        console.log(state)
        return (
            <div className="detail">
                {`${state.name}+${state.article}`}
                <button onClick={() => { this.AddShopCara(state) }}>加入购物车</button>
            </div>
        );
    }
}

export default Detail;