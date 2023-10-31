//Create function that takes in one argument that is passed through a conditional statement. Return the result as an alert or console.log. Test all of your conditions to make sure you can receive all of your results back. 

function checkValue(input) {
  if (input == 0) {
    console.log("The input is equal to 0");
  } else if (input > 0) {
    console.log("The input is greater than 0");
  } else {
    console.log("The input is less than 0");
  }
}

checkValue(5); 