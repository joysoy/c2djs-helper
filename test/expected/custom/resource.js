var res = {
	// Subdirectory: aa/res/, Order: [A-Z]
	Background_jpg: "test/fixtures/res/aa/res/background.jpg",
	HelloWorld_png: "test/fixtures/res/aa/res/hello_world.png",
	Star_png: "test/fixtures/res/aa/res/star.png",

	Background1_jpg: "test/fixtures/res/background.jpg",
	HelloWorld1_png: "test/fixtures/res/HelloWorld.png",
	Star1_png: "test/fixtures/res/star.png",
};

var g_resources = [];
for (var i in res) {
	g_resources.push(res[i]);
}
