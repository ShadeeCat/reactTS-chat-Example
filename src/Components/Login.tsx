import React from 'react';
import { useHistory } from "react-router"

import './styles/login.css';

export const Login = () => {

	const usernameInput = React.createRef<HTMLInputElement>()
	const passInput = React.createRef<HTMLInputElement>()

	let history = useHistory()

	const submitForm = (e) => {
		e.preventDefault()

		fetch('/post-validation', {
		    method: 'POST',
		    body: `username=${ usernameInput.current!.value }&password=${ passInput.current!.value }`
		}).then(r => {
			if (r.status === 404) {
				// redirect
				history.push("/home")
			}
		})
	}
	return <div className="form_container" >
		<form onSubmit={submitForm}>
			<h1>Sign In</h1>
			<label htmlFor="login">
				<span></span>
				<input ref={ usernameInput } type="text" id="login" />
			</label>
			<label htmlFor="password">
				<span></span>
				<input ref={ passInput } type="password" id="password" />
			</label>
			<label>
				<button type="submit">Login</button>
			</label>
		</form>
	</div>
}