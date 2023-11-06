function onFormSubmit(e) {
	e.preventDefault();
	const titleInput = document.getElementById("input-title").value;
	const contentInput = document.getElementById("input-content").value;

	createPost(titleInput, contentInput);
}

function createPost(title, content) {
	const posts = getPosts();
	const postId = posts.length + 1;

	// Push new post object into array.
	posts.push({
		id: postId,
		title: title,
		content: content,
		date: new Date(),
	});

	localStorage.setItem("posts", JSON.stringify(posts));
	location.href = `post.html?postId=${postId}`;
}

function getPosts() {
	// Get the local storage items.
	const arrayString = localStorage.getItem("posts");

	// If it doesnt exist, return empy array.
	if (!arrayString) return [];

	// Parse string array.
	return JSON.parse(arrayString);
}

window.onload = function () {
	// Mount the form listener
	document
		.getElementById("post-form")
		.addEventListener("submit", onFormSubmit);
};
