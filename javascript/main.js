let defaultPosts = [
	{
		id: 1,
		title: "The Future of Coding: Quantum Programming Takes Center Stage",
		content:
			"In the rapidly evolving world of technology, quantum programming is emerging as a game-changer. Quantum computers have the potential to revolutionize the way we code, making complex computations a breeze. This article explores the fundamentals of quantum programming, its implications for software engineers, and the exciting future it promises.",
		date: new Date("03/13/2022"),
	},
	{
		id: 2,
		title: "From JavaScript to Rust: A Software Engineer's Journey",
		content:
			"Embarking on a new coding adventure, one software engineer shares their experience transitioning from JavaScript to Rust. This article delves into the reasons for making the switch, the challenges faced, and the advantages of adopting a language known for its safety and performance. Discover the insights gained along the way.",
		date: new Date("05/03/2022"),
	},
	{
		id: 3,
		title: "SaaS Security: The Achilles' Heel of Modern Software",
		content:
			"In today's technology-driven world, Software as a Service (SaaS) has become an integral part of our daily lives. From project management tools to cloud-based collaboration platforms, SaaS solutions have transformed the way businesses operate. However, the convenience and efficiency offered by SaaS applications come with a caveat: security concerns that can be the Achilles' heel of modern software.\n\nAs the digital landscape continues to evolve, the importance of SaaS security cannot be overstated. With vast amounts of sensitive data, including customer information, financial records, and intellectual property, stored on the cloud, SaaS applications have become prime targets for cyberattacks. Malicious actors constantly seek vulnerabilities in SaaS products, making it crucial for software engineers and developers to address security as a top priority.\n\nTo protect your SaaS product, it's essential to understand the various vulnerabilities that can be exploited by attackers. These vulnerabilities may include weak authentication mechanisms, insufficient data encryption, and inadequate access control. Malware, phishing attacks, and data breaches are just a few of the potential threats that can compromise the security of your SaaS application.",
		date: new Date("11/02/2023"),
	},
];

// Function to generate the options of post to select from.
function generatePostMenu() {
	const postMenuRef = document.getElementById("posts-container");

	getPosts().map((p, i) => {
		postMenuRef.innerHTML += buildPostMenuButton(p);
	});
}

// Build each post button to push to the menu.
function buildPostMenuButton(post) {
	const htmlDataString = `			
	<div class="post-container">
		<div class="post-header">
			<h1>${post.title}</h1>
			<p>${formatDate(post.date)}</p>
		</div>
		<p>
			${post.content.slice(0, 250)}...
		</p>
		<div class="post-footer">
			<a href="post.html?postId=${post.id}">Read More></a>
		</div>
	</div>`;

	return htmlDataString;
}

// Get the total number of posts.
function getNumberOfPosts() {
	if (!getPosts()) return 0;
	return getPosts().length;
}

// Get the posts from storage.
function getPosts() {
	const arrayString = localStorage.getItem("posts");
	if (!arrayString) return [];
	return JSON.parse(arrayString);
}

// Get the date to format.
function formatDate(date) {
	return new Date(date).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

// On Window Load
window.onload = function () {
	if (!localStorage.getItem("posts")) {
		localStorage.setItem("posts", JSON.stringify(defaultPosts));
	}

	generatePostMenu();
};
