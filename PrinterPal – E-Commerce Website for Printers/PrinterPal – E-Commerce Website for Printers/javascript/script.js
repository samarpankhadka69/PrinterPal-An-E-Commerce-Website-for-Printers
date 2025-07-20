// javascript code for contact us  //

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const alertMessage = `YOUR FEEDBACK HAS BEEN SENT SUCESSFULLY. WE WILL CONTACT YOU SOON THANKYOU!!`;

  alert(alertMessage);

});





