var res = {
	// Subdirectory: aa/res/, Order: [A-Z]
	Avatar_png: "aa/res/avatar.png",
	Background_jpg: "aa/res/background.jpg",
	HelloWorld_png: "aa/res/hello_world.png",
	Star_png: "aa/res/star.png",

	Avatar1_png: "avatar.png",
	Background1_jpg: "background.jpg",
	HelloWorld1_png: "HelloWorld.png",
	Star1_png: "star.png",
};

var g_resources = [];
for (var i in res) {
	g_resources.push(res[i]);
}
