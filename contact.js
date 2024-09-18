document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Simple form validation and message display
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Here you can add your logic to send the form data to a server (AJAX or fetch request)
    
    // Simulating a successful form submission
    document.getElementById('formResponse').innerText = `Thank you, ${name}! Your message has been sent.`;
    
    // Reset the form
    event.target.reset();
});
