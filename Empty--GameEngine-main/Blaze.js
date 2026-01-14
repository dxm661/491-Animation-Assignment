class Blaze {
	constructor(game) {
		this.game = game;
		this.animator = new AnimatorBlaze(ASSET_MANAGER.getAsset("./Blaze.png"), -2, 0, 24, 25, 7, .3);
		this.x = 0;
		this.y = 250;
		this.speed = 160;
		this.forwards = 0;
	};

	update() {
	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 500, 288);
	};
}