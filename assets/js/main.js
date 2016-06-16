var game;

// Create a new game instance 600x450px:
game = new Phaser.Game(600, 450, Phaser.AUTO, '');

// First param is how our state will be called.
// Second param is an object Containing the nneded mehthods for state functionality.
game.state.add('Menu', Menu);

// Add the Game state.
game.state.add('Game', Game);

// Add the Game_over state.
game.state.add('Game_Over', Game_Over);

game.state.start('Menu');
