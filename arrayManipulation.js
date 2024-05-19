// Function to process an array of numbers
function processArray(numbers) {
    return numbers.map(num => num % 2 === 0? num ** 2 : num * 3);
  }
  
  // Function to format an array of strings based on an array of numbers
  function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
      if (numbers[index] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const processedNumbers = processArray(numbers);
  console.log(processedNumbers); // [3, 4, 9, 16, 15]
  
  const strings = ["hello", "world", "javascript", "is", "fun"];
  const formattedStrings = formatArrayStrings(strings, processedNumbers);
  console.log(formattedStrings); // ["HELLO", "WORLD", "javascript", "is", "fun"]