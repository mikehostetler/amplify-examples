amplify.request.define( "movies", function( settings ) {
	settings.success([
		{
			"title": "Toy Story 3",
			"description": "Some toys tell a story (for the third time)."
		},
		{
			"title": "King's Speech",
			"description": "A king talks about something nobody cares about."
		}
	]);
});
