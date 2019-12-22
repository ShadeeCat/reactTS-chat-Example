import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login } from "./Components/Login"
import { Platform } from "./Components/Platform"

import './App.css';
 
const App: React.FC = () => {
	return	<Router>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route exact path="/home">
						<Platform />
					</Route>
				</Switch>
			</Router>
}

export default App;

