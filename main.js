// Code adapted from https://pre83.com/CMPM120/Project%2000%20%20The%20Toolset.html

const defaultAttributeScores = [15, 14, 13, 12, 10, 8];

class Player {
  constructor(characterName = 'Naruto') {
    this.name = characterName;

    this.attributes = {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    };
  }

  rollAttributes() {
    console.log('Rolling dice...');
  };

  printPlayer() {
    console.log(this.name);
    console.log(this.attributes);
  }
}

const player01 = new Player();
player01.printPlayer();
const player02 = new Player('Son Goku');
player02.rollAttributes();
player02.printPlayer();