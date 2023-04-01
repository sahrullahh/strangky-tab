export const geoLocation = () => {
	return new Promise((success, error) => {
		navigator.geolocation.getCurrentPosition(success, error);
	});
};
