import React from 'react';
import AppContext from './AppContext';
import routes from './Router/RootRouter';
import Router from './Router/Router';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './Redux/store';

export default function AppInit() {
	return (
		<AppContext.Provider value={{ routes }}>
			<ReduxProvider store={store}>
				<Router routes={routes} />
			</ReduxProvider>
		</AppContext.Provider>
	);
}
