import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login } from "./Components/Login"

import './App.css';
 
const App: React.FC = () => {
	return (
		<Login /> 
	);
}

export default App;

