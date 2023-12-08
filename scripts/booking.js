/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let toggleCount = 0;

function toggleButtonColor(li) {
    li.classList.toggle("highlighted");
    
  }


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function highlightButton(buttonId) {
  const button = document.getElementById(buttonId);
  
  // Remove the class from all buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach(function(btn) {
    btn.classList.remove("highlighted");
  });
  
  // Add the class to the clicked button
  button.classList.add("highlighted");
  
  // Update the selectedButton variable
  selectedButton = button;
}

function removeHighlight() {
  if (selectButton) {
    selectButton.classList.remove("highlighted");
    selectButton = null;
  }
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let selectedButton = null;

function highlightButton(buttonId) {
  const button = document.getElementById(buttonId);
  
  // Remove the class from the previously selected button
  if (selectedButton) {
    selectedButton.classList.remove("highlighted");
  }
  
  // Add the class to the clicked button
  button.classList.add("highlighted");
  
  // Update the selectedButton variable
  selectedButton = button;
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


