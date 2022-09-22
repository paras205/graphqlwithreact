import React, { Component } from "react";
import { graphql } from "react-apollo";
import { songQuery } from "../queries/fetchSongs";

class SongDetail extends Component {
	render() {
		console.log(this.props);
		return <div>SongDetail</div>;
	}
}
export default graphql(songQuery, {
	options: (props) => {
		return {
			variables: { id: props.params.id },
		};
	},
})(SongDetail);
