//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.invalidTriangle =
      this._checkTriangleInequality() || this._checkForInvalidLengths();
  }

  isEquilateral() {
    return this.invalidTriangle ? false : this._matchingSides() === 3;
  }

  isIsosceles() {
    return this.invalidTriangle ? false : this._matchingSides() >= 2;
  }

  isScalene() {
    return this.invalidTriangle ? false : this._matchingSides() === 0;
  }

  _matchingSides() {
    const set = new Set(this.sides);
    let matching = 0;
    if (set.size === 2) matching = 2;
    if (set.size === 1) matching = 3;

    return matching;
  }

  _checkTriangleInequality() {
    const [side1, side2, side3] = this.sides.sort((a, b) => a - b);
    return side1 + side2 < side3;
  }

  _checkForInvalidLengths() {
    return !this.sides.every((side) => side > 0);
  }
}
