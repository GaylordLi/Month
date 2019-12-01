import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

interface IRoute {
    path: string;
    name: string;
    component: any;
    children?: Array<any>;
}
class RouterMap extends Component<any> {
    render() {
        const { routes, history } = this.props;
        const defaultRoute = (
            <Redirect from='/' to='/home' key={'default'} exact></Redirect>
        );
        return (
            <Router history={history}>
                <Switch>
                    {routes
                        .map((item: IRoute, index: number) => {
                            const children = item.children === undefined ? [] : item.children;
                            const Comp = item.component;
                            return (
                                <Route
                                    key={item.name}
                                    path={item.path}
                                    component={() => {
                                        return <Comp routes={children} history={history}></Comp>;
                                    }}
                                />
                            );
                        })
                        .concat([defaultRoute])}
                </Switch>
            </Router>
        );
    }
}

export default RouterMap;
