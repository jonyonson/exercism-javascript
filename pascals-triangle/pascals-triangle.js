//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n == 0) return [];
  const all_rows = [[1]];
  for (let i = 1; i < n; i++) {
    const new_row = all_rows[i - 1].map(
      (value, j, row) => value + (row[j - 1] || 0),
    );
    new_row.push(1);
    all_rows.push(new_row);
  }
  return all_rows;
};
