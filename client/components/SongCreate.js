import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongCreate extends Component {
	constructor(props) {
		super(props);
		this.state = { title: "" };
	}
	onSubmit(e) {
		e.preventDefault();
		this.props
			.mutate({
				variables: {
					title: this.state.title,
				},
			})
			.then((res) => console.log(res));
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<label>Song title</label>
					<input
						onChange={(e) =>
							this.setState({ title: e.target.value })
						}
						value={this.state.title}
					/>
				</form>
			</div>
		);
	}
}
const mutation = gql`
	mutation AddSong($title: string) {
		addSong(title: $title) {
			title
		}
	}
`;
export default graphql(mutation)(SongCreate);
