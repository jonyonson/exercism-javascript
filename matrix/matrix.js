//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this.matrixString = str;
    this.matrix = this.matrixString
      .split('\n')
      .map((x) => x.split(' ').map((y) => +y));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((item, index) =>
      this.matrix.map((row) => row[index]),
    );
  }
}
