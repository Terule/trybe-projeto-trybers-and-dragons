import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _enemies: (Fighter | SimpleFighter)[];

  constructor(character: Fighter, enemies: (Fighter | SimpleFighter)[]) {
    super(character);
    this._character = character;
    this._enemies = enemies;
  }

  fight(): number {
    this._enemies.forEach((enemy) => {
      while (this._character.lifePoints > 0 && enemy.lifePoints > 0) {
        this._character.attack(enemy);
        enemy.attack(this._character);
      }
    });

    return super.fight();
  }
}