import React, { Component } from 'react'
import Footer from '../../component/footer/footer'
class User extends Component {
    state = {};

    render() {
        return (
            <div className="App">
                <div className="main">
                    账号
                </div>
                <div className="footer">
                    <Footer prop={this.props}></Footer>
                </div>
            </div>
        );
    }
}

export default User;