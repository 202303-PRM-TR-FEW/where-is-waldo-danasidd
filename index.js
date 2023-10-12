const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]];

const whereIsWaldo = (matrix) => {
 let row = 1
 let col = 1

 for (let i = 1; i < matrix.length; i++) {
  for (let j = 1; j < matrix[i].length; j++) {
    if (matrix[i][j] !== matrix[1][1]) {
      row = i + 1
      col = j + 1
      break;
    }
  }
 }
 return [row, col];
}

console.log(whereIsWaldo(example))