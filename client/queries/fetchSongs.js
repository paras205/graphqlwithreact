import gql from "graphql-tag";

const songsQuery = gql`
	{
		songs {
			title
		}
	}
`;

const songQuery = gql`
	query songQuery($id: ID!) {
		song(id: $id) {
			id
			title
		}
	}
`;

export { songsQuery, songQuery };
