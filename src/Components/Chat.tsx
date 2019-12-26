import React from 'react';

import { User } from "./Platform"
import { Message } from "./Platform"

interface UserChats {
	chats: Message[]
}

export class PrivateChat extends React.Component <{ userId: number, userData: User }, {}> {
	state: UserChats = {
		chats: []
	}

	Fetch(){
		fetch(`/data-api/users-chats/${ this.props.userId }.json`)
		.then(r => r.json())
		.then((msgs: Message[]) => {
			this.setState({ chats: msgs });
		})
	}
	componentDidMount () {
		this.Fetch()
	}

	componentDidUpdate (prevProps) {
		if (this.props.userId  !== prevProps.userId) {
			this.Fetch()
		}
	}
	render() {
		return <div>
			<div>{this.props.userId}</div>
			{
				this.state.chats.map(m => <p key={m.date}>{m.message} { m.date } { this.props.userData.src }</p>)
			}
		</div>
	}
}
