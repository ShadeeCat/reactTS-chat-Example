import React from 'react';

import { User } from "./Platform"
import { Message } from "./Platform"

interface UserChats {
	chat: Message[]
}

interface PrivateChatProps {
	userId: number,
	userData: User,
	closePrivateChat: () => void
}
export class PrivateChat extends React.Component <PrivateChatProps, {}> {
	state: UserChats = {
		chat: []
	}
	addNewMessageInput = React.createRef<HTMLInputElement>()

	getMessages () {
		fetch(`/data-api/users-chat/${ this.props.userId }.json`)
		.then(r => r.json())
		.then((msgs: Message[]) => {
			this.setState({ chat: msgs });
		})
	}
	componentDidMount() {
		this.getMessages()
	}

	componentDidUpdate (prevProps) {
		if (this.props.userId  !== prevProps.userId) {
			this.getMessages()
		}
	}
	addNewFormMessage = (e) => {
		e.preventDefault()

		const { chat } = this.state;
		// chat.push({ message: document.querySelector('#root > div > div:nth-child(2) > form > input[type=text]').value, date: new Date().toJSON().slice(0, 20) })
		chat.push({ message: this.addNewMessageInput.current!.value, date: new Date().toJSON().slice(0, 20) })
		this.setState({ chat })
	}

	render() {
		return <div>
			<div>{this.props.userId}</div>
			<button onClick={ this.props.closePrivateChat }>close Chat</button>
			{
				this.state.chat.map(m => <p key={m.date}>{m.message} { m.date } { this.props.userData.src }</p>)
			}
			<form onSubmit={this.addNewFormMessage}>
				<input ref={this.addNewMessageInput} type="text" />
				<button>no text!!!</button>
			</form>
		</div>
	}
}