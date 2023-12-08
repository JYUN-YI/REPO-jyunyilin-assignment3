// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.querySelector('#submit-button').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById("con").innerHTML = "";
  const element = document.getElementById("ch"); // assigning the correct element to the variable
  const replacedText = element.innerHTML.replace("We'd love to hear from you!", "Thank you for your message!");
  element.innerHTML = replacedText;
});


