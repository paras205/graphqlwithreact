import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { songsQuery } from "../queries/fetchSongs";
class SongList extends Component {
	deleteSong(id) {
		this.props
			.mutate({ variables: { id } })
			// if query and mutation on the same component then we can use this.props.data.refetch or else we need to use refetchQueries to refetch the data
			.then(() => this.props.data.refetch());
	}
	render() {
		console.log(this.props);
		return <div onClick={() => this.deleteSong()}>SongList</div>;
	}
}

const mutation = gql`
	mutation deleteSong($id: ID) {
		deleteSong(id: $id) {
			id
		}
	}
`;

export default graphql(mutation)(graphql(songsQuery)(SongList));
