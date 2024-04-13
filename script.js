// login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation: Check if username and password are not empty
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Perform login validation
    // Replace this with your actual authentication logic
    if (username === 'admin' && password === 'password') {
        // Redirect to the second page after successful login
        console.log('Login successful');
        window.location.href = 'index.html';
    } else {
        // If login fails, show an alert message
        alert('Invalid username or password. Please try again.');
    }
});

// Reservation form
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value.trim();
    const time = document.getElementById('time').value.trim();

    // Validate form input
    if (!name || !email || !phone || !date || !time) {
        // Display error message
        alert('Please fill out all fields.');
        return;
    }

    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';

    // Display success message
    alert('Your table has been reserved!');

    
});

// feedback form

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
	// Prevent form submission
	event.preventDefault();
  
	// Define form fields and their corresponding error messages
	const formFields = [
	  { id: 'name', errorId: 'nameError', errorMessage: 'Please enter your name' },
	  { id: 'email', errorId: 'emailError', errorMessage: 'Please enter a valid email address' },
	  { id: 'message', errorId: 'messageError', errorMessage: 'Please enter your feedback' }
	];
  
	// Reset error messages
	formFields.forEach(field => {
	  document.getElementById(field.errorId).textContent = '';
	});
  
	// Validate form fields
	let isValid = true;
	formFields.forEach(field => {
	  const value = document.getElementById(field.id).value.trim();
	  if (!value) {
		document.getElementById(field.errorId).textContent = field.errorMessage;
		isValid = false;
	  }
	});
  
	// Submit form if valid
	if (isValid) {
	  // Simulate submission delay (remove this line in actual implementation)
	  setTimeout(() => {
		// Show success message
		const successMessage = document.createElement('p');
		successMessage.textContent = 'Feedback successfully submitted!';
		successMessage.style.color = 'green';
		document.getElementById('feedbackForm').appendChild(successMessage);
		
		// Reset form after submission (optional)
		document.getElementById('feedbackForm').reset();
	  }, 1000); // Simulate a 1-second delay for demonstration purposes
  
	  // You can uncomment the following line to submit the form in actual implementation
	  this.submit();
	}
  });
  

