class PitII {
	constructor() {
		this.backgroundImage = ASSET_MANAGER.getAsset("./PitII.png");

	};

	update() {
	};

	draw(ctx) {
		ctx.drawImage(this.backgroundImage, -1350, -400);
	};
}