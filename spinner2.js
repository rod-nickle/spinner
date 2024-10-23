// Eight is the number of positions we need to show a line for the spinner for one revolution.
// NOTE: We will display the vertical line "|" an extra time at the end.
// There are 4 different lines that we need to show.
// Therefore we can determine the line to show based on the remainder of dividing the index by 4.
const numberOfPositionsInOneRevolution = 8;
for (let i = 0; i <= numberOfPositionsInOneRevolution; i++) {
  let delay = 100;   // Start the delay at 100ms.
  let char = "";
  let remainder = 0;
  
  // Increment the by 200ms for each itertion of the loop.
  delay += (delay + (200 * i));

  // Determine the remainder of dividing the index by 4.
  if (i !== 0) {
    remainder = i % 4;
  }

  // The line that is displayed is dependent on the remainder.
  switch (remainder) {
  case 0:
    char = '\r|   ';
    break;
  case 1:
    char = '\r/   ';
    break;
  case 2:
    char = '\r-   ';
    break;
  case 3:
    char = '\r\\   ';
    break;
  }

  // If we displaying the last line, add a new line character to move the cursor to a new line.
  if (i === numberOfPositionsInOneRevolution) {
    char += '\n';
  }

  // Print out the line after the appropriate delay.
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);

}


