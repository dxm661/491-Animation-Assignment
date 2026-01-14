const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./MileenaMK2.png");
ASSET_MANAGER.queueDownload("./PitII.png");
ASSET_MANAGER.queueDownload("./Blaze.png");

ASSET_MANAGER.downloadAll(() => {
	// If I don't have a comment here firefox loads too fast and breaks so hi :)
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothEnabled = false;

	gameEngine.addEntity(new Mileena(gameEngine));
	gameEngine.addEntity(new Blaze(gameEngine));
	gameEngine.addEntity(new PitII());

	gameEngine.init(ctx);

	gameEngine.start();
});
