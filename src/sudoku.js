export function isValid(array) {
  if ((array.filter(x => (x >0 && x<10)).length === array.length) && (new Set(array).size === array.length)) {
    return true;
  }
  return false;
}



export function horizParser(array){
  // console.log(array)
  // works with a single line

  let results = [];

  // const horiz = [
  //   [0,1,2],
  //   [3,4,5],
  //   [6,7,8]
  // ];

  const horiz = [
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ];


  for (let outer =0; outer <3; outer++){


    // for(let inner =0; inner<3; inner++){
    //
    //   // board[horiz[0][2]][horiz[0][0]]
    //
    //   board [horiz[0][0]] [horiz[0][1]]
    //
    //   // console.log(array[outer] horiz[inner]);
    //
    //     // array[0][0]

      results.push( board.s )

    // }
  }

  return results;
}


// let numbs = [122,101,1222,6655,322,665,399,45,332];


var board = [
  [1,2,3,4,5,6,7,8,9


  ],
  [1,2,3,4,5,6,7,8,9],
  [1,2,33,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,200,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,42,9]
];
// make a row
// take 9 at a time
// make a column
// take every 9th
// make a cell
// take 3 skip 6

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81];

function makeRows(b) {
  let results = []

  for (let i = 0; i<9; i++) {
    results.push(board.splice(0,9));
  }

  return results;
}

function makeColumns(b) {
  let results = []

  for (let i = 0; i<9; i++) {
    let indexPos = i*9
    results.push(board[indexPos])
  }
}
