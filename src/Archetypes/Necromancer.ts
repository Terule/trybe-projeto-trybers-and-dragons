import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static count = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.count += 1;
  }

  static createdArchetypeInstances(): number {
    return this.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}