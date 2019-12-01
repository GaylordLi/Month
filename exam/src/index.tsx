import dva from 'dva';
import RouterView from './router';
import createHistory from 'history/createBrowserHistory';
import { createModel } from './store';
import './assets/css/index.css'
const app = dva({
    history: createHistory()
});

createModel(app);
app.router(RouterView);
app.start('#root');
