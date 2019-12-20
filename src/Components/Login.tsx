import React from 'react';
	
export class Login extends React.Component {

	
	submitForm = (e) => {
		e.preventDefault()
	}
	render() {
		return <form onSubmit={this.submitForm}>
			<label>
				<input type="text" />
			</label>
			<label>
				<input type="text" />
			</label>
			<label>
				<input type="submit" />
			</label>
		</form>
	}	
}
// fetch('/post-validation', {
//     method: 'POST',
//     body: `username=${ $0.value }`
// }).then(r => if (r.status === 404) {
//     // redirect
// })