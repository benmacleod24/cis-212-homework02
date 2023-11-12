function getPostId() {
	const searchString = window.location.search;
	const params = new URLSearchParams(searchString);

	return Number(params.get("postId"));
}

function hydrateHTML() {
	const post = getPostById(getPostId());

	if (!post) {
		window.location.href = "index.html";
	}

	document.getElementById("title").innerText = post.title;
	document.getElementById("category").innerText = post.category;
	document.getElementById("content").innerText = post.content;
	document.getElementById("date").innerText = formatDate(post.date);
	document.getElementById("word-count").innerText = `Words: ${getWordCount(
		post.content
	)}`;
}

function getPostById(id) {
	// Get the local storage items.
	const arrayString = localStorage.getItem("posts");

	// If it doesnt exist, return empy array.
	if (!arrayString) return null;

	// Parse the string.
	const posts = JSON.parse(arrayString);

	return posts.find((p) => p.id === id);
}

function deletePost() {
	// Get the local storage items.
	const arrayString = localStorage.getItem("posts");

	// If it doesnt exist, return empy array.
	if (!arrayString) return null;

	// Parse the string.
	const posts = JSON.parse(arrayString);

	localStorage.setItem(
		"posts",
		JSON.stringify(posts.filter((p) => p.id !== getPostId()))
	);

	window.location.href = "index.html";
}

function getWordCount(content) {
	return content.replace("\n", " ").split(" ").length;
}

function formatDate(date) {
	return new Date(date).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

window.onload = function () {
	hydrateHTML();
};
