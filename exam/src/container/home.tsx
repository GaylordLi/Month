import React, { Component } from 'react'
import Footer from '../component/footer/footer'
import { connect } from 'dva'

const MapStore = (store: any) => {
    return store
}
@connect(MapStore)
class Home extends Component<any> {
    state = {};
    componentDidMount() {
        this.props.dispatch({
            type: "Shop/getshoplist"
        })
    }
    render() {
        return (
            <div className="App">
                <div className="main">
                    首页
                </div>
                <div className="footer">
                    <Footer prop={this.props}></Footer>
                </div>
            </div>
        );
    }
}

export default Home;