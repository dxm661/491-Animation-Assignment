class Mileena {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./MileenaMK2.png"), 60, 20, 50, 96, 10, .1);
		this.walking = new Animator(ASSET_MANAGER.getAsset("./MileenaMK2.png"), 13, 136, 46, 102, 8, .1);
		this.backwards = new Animator(ASSET_MANAGER.getAsset("./MileenaMK2.png"), 381, 136, -46, 102, 8, .12);
		this.crouching = new Animator(ASSET_MANAGER.getAsset("./MileenaMK2.png"), 800, 20, 50, 96, 1, 100);
		this.rolling = new Animator(ASSET_MANAGER.getAsset("./MileenaMK2.png"), 547, 187, 43, 51, 7, .03);
		this.x = 0;
		this.y = 250;
		this.speed = 250;
		this.forwards = 0;
	};

	update() {
		if (this.game.keys.ArrowDown == true && this.game.keys.ArrowLeft == true) {
			this.forwards = -2
		}
		else if (this.game.keys.ArrowDown == true) {
			this.forwards = 2;
		}
		else if (this.game.keys.ArrowLeft == true) {
			this.forwards = -1;
		}
		else if (this.game.keys.ArrowRight == true) {
			this.forwards = 1;
		}
		else {
			this.forwards = 0;
		}

		switch (this.forwards) {
			case 1:
				this.x += this.speed * this.game.clockTick;
				if (this.x >= 1024 - 46 * 3.5) {
					this.x = 1024 - 46 * 3.5;
				}
				break;

			case -1:
				this.x -= this.speed / 1.2 * this.game.clockTick;
				if (this.x <= 0) {
					this.x = 0
				}
				break;

			case -2:
				this.x += this.speed * 5 * this.game.clockTick;
				if (this.x >= 1024 - 46 * 3.5) {
					this.x = 1024 - 46 * 3.5;
				}
				break;
		}

	};

	draw(ctx) {
		//this.animator.drawFrame(this.game.clockTick, ctx, 100, 200);
		switch (this.forwards) {
			case 0:
				this.animator.drawFrame(this.game.clockTick, ctx, this.x - 4 * 3.5, this.y)
				break;
			case 1:
				this.walking.drawFrame(this.game.clockTick, ctx, this.x, this.y);
				break;
			case -1:
				this.backwards.drawFrame(this.game.clockTick, ctx, this.x + 46 * 3.5, this.y);
				break;
			case 2:
				this.crouching.drawFrame(this.game.clockTick, ctx, this.x, this.y);
				break;
			case -2:
				this.rolling.drawFrame(this.game.clockTick, ctx, this.x, this.y )
				break;
		}
	};
}