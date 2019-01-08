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


    for(let inner =0; inner<3; inner++){

      console.log(array[horiz[outer]][horiz[inner]);

        // array[0][0]

      // results.push(array[horiz[outer][inner]])

    }
  }

  return results;
}


// let numbs = [122,101,1222,6655,322,665,399,45,332];


var board = [
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9]
];
