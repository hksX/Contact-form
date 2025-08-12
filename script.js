document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const successMessage = document.getElementById('successMessage');

  let isValid = true;

  // Clear old messages
  document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');
  successMessage.textContent = '';

  // Name Validation
  if (name.value.trim() === '') {
    showError(name, 'Name is required.');
    isValid = false;
  }

  // Email Validation
  if (email.value.trim() === '') {
    showError(email, 'Email is required.');
    isValid = false;
  } else if (!validateEmail(email.value.trim())) {
    showError(email, 'Invalid email format.');
    isValid = false;
  }

  // Message Validation
  if (message.value.trim() === '') {
    showError(message, 'Message is required.');
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Your message has been submitted!';
    name.value = '';
    email.value = '';
    message.value = '';
  }
});

function showError(input, message) {
  const small = input.parentElement.querySelector('.error-message');
  small.textContent = message;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

