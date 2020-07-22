import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import store from '@store/index';
import zhCN from 'antd/es/locale/zh_CN';
import NoMatch from '@pages/404';
import routes from './routes';
import '@styles/normalize.less';
import '@styles/global.less';

const App: FC = () => {
	return (
		<ConfigProvider locale={zhCN}>
			<Provider store={store}>
				<Router>
					<ul>
						<li>
							<Link to="/sub2/test1">test1</Link>
						</li>
						<li>
							<Link to="/sub2/test2">test2</Link>
						</li>
					</ul>
					<Switch>
						{routes.map(item => {
							return <Route key={item.link} path={item.link} component={item.component} exact />;
						})}
						<Route component={NoMatch} />
					</Switch>
				</Router>
			</Provider>
		</ConfigProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('micro-content'));
