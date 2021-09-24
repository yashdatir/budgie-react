import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

export default function Router({ routes }) {
    return (
        <Suspense fallback={<>Loading...</>}>
		<BrowserRouter>
			<Switch>
                <Route path="/" exact render={()=><Redirect to="/page/1" />} />
                {routes.map((route, key)=><Route key={key} {...route} />)}
    		</Switch>
            <Link to="/page/1">Page 1</Link>
            <Link to="/page/2">Page 2</Link>
            <Link to="/error/400">404</Link>
            <Link to="/error/500">500</Link>
		</BrowserRouter>
        </Suspense>
	);
}
