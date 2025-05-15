function numberOfBooksRead(library) {
  // Check if library is an array
  if (!Array.isArray(library)) {
    throw new Error("Input must be an array of books.");
  }

  // Count books with readingStatus set to true
  let count = 0;
  for (let book of library) {
    if (book.readingStatus === true) {
      count++;
    }
  }

  return count;
}

// Example usage:
const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }
];

console.log(numberOfBooksRead(library)); // Output: 2