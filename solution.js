/* Place your solution here */


// Load which puzzle you are trying to solve 
// This displays the puzzle on the webpage
// (you can find all the puzzles in the puzzle.js file, feel free to add you own and add them to github)
load(puzzle.fivebyfive)

// Load which list of words you want find in the puzzle
console.log("Words:",words.fivebyfive)

// Search for those words in the puzzle
console.log("Puzzle:",puzzle.fivebyfive)

// Solve by passing an array of coordinates [...[startRow,startColumn,endRow,endColumn]]
// this circles all the words on the page
solve([[0,0,1,1],[4,1,2,3]])
