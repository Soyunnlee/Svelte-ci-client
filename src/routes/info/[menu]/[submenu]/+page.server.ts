export const load = (event) => {
	console.log(event.params);
	return {
		menu: event.params.menu,
		submenu: event.params.submenu,
	};
};
