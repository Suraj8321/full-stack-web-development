// script.js

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('emailInput').value;
    if (email.trim() === '') {
      alert('Please enter a valid email address.');
    } else {
      // You can add your form submission logic here, e.g
  