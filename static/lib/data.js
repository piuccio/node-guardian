export default {
	initial() {
		return new Promise(resolve => {
			var content = document.getElementById('front-initial-data').textContent;
			resolve(JSON.parse(content));
		});
	},

	fetch(front) {}
};
