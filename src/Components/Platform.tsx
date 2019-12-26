import React from 'react';

import { PrivateChat } from "./Chat"

import './styles/platform.css';
	
	export interface User {
		id: number,
		name: string,
		src: string,
		last_message: Message
	}
	export interface Message {
		message: string,
		date: string
	}
	interface PlatformState {
		usersList: User[],
		showChat: boolean,
		chatUserId: number | null
	}
export class Platform extends React.Component<{}, PlatformState> {
	state: PlatformState ={
		usersList: [],
		showChat: false,
		chatUserId: null
	}

	componentDidMount() {
		fetch("./data-api/users.json")
		.then(responce => responce.json())
		.then(data => {
			this.setState({ usersList: data });
		})
	}
	enterChat = (id) => {
		this.setState({
			showChat: true,
			chatUserId: id
		})
	}
	render() {
		return <div>
		<div>
			{
				this.state.usersList.map(user => <div key={user.id} onClick={ e => this.enterChat(user.id) } >
					<img src={ `/images/users-photos/${user.src}` } />
					<div>
						<div>
							<h4>{ user.name }</h4>
							<span>{ user.last_message.date }</span>
							<span> { user.id }</span>
						</div>
						<p>{ user.last_message.message }</p>
					</div>
				</div>)
			}
			</div>
			{ this.state.showChat ? <PrivateChat 
				userId={this.state.chatUserId!} 
				userData={ this.state.usersList.find(u => u.id === this.state.chatUserId)! } 
				/> : null 
			}
		</div>
	}
}