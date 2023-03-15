export const load = (event) => {
	console.log(event.params);
	return {
		params: event.params.menu,
	};
};
