import React from 'react';
	
	interface UserState {
		name: string,
		src: string,
		messages: UserMessages[],
		chatDate: Date 
	}
	interface UserMessages {
		message1: string,
		message2: string,
		message3: string
	}
	interface PlatformState {
		usersList: UserState[]
	}
export class Platform extends React.Component<{}, PlatformState> {
	state: PlatformState ={ 
		usersList: []
	}

	componentDidMount() {
		fetch("./data-api/users.json")
		.then(responce => responce.json())
		.then(data => {
			this.setState({ usersList: data }); console.log(data)
		})
	}
	render() {
		return <div>
			{  }
		</div>
	}
}

// fetch('/post-validation', {
//     method: 'POST',
//     body: `username=${ $0.value }`
// }).then(r => if (r.status === 404) {
//     // redirect
// })