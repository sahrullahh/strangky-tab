export function readAsDataURL(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = () => {
			return resolve(reader.result);
		}
		reader.onerror = () => reject('error');
		reader.readAsDataURL(file);
	});
}
