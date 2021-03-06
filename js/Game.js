class Game extends Phaser.Game {
  constructor(width, height) {
    super(width, height, Phaser.AUTO);

    this.state.add( 'BootState',    BootState    );
    this.state.add( 'PreloadState', PreloadState );
    this.state.add( 'PlayState',    PlayState    );
    this.state.start('BootState');
  }
}

Game.create = function(width, height) {
  return new Game(width, height);
}
