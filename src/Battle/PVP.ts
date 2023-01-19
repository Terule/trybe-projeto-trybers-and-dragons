import Fighter from '../Fighter';
import Battle from './Battle';

export default class extends Battle {
  private _firstCharacter: Fighter;
  private _secondCharacter: Fighter;

  constructor(firstCharacter: Fighter, secondCharater: Fighter) {
    super(firstCharacter);

    this._firstCharacter = firstCharacter;
    this._secondCharacter = secondCharater;
  }

  fight(): number {
    while (
      this._firstCharacter.lifePoints > 0
      && this._secondCharacter.lifePoints > 0
    ) {
      this._secondCharacter.attack(this._firstCharacter);
      this._firstCharacter.attack(this._secondCharacter);
    }
    return super.fight();
  }
}