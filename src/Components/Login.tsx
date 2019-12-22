import React from 'react';
import { useHistory } from "react-router"

import '../assets/styles/login.css';
	
export const Login = () => {
	let history = useHistory()

	const submitForm = (e) => {
		e.preventDefault()
		history.push("/home")
	}
	
	return <div className="form_container" >
		<form onSubmit={submitForm}>
			<h1>Sign In</h1>
			<label htmlFor="login">
				<span></span>
				<input className="form-control form-control-lg" type="text" id="login" />
			</label>
			<label htmlFor="password">
				<span></span>
				<input className="form-control form-control-lg" type="password" id="password" />
			</label>
			<label>
				<button type="submit">Login</button>
			</label>
		</form>
	</div>
}
