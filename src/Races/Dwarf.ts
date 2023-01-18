import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static count = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.count += 1;
    this._maxLifePoints = 80;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.count;
  }
}