import React from 'react';
import Routes from './routes';
import RouteMap from './map';

function RouterView(props: any) {
    const routes = props.routes === undefined ? Routes : props.routes;
    return <RouteMap routes={routes} {...props} />;
}
export default RouterView;
