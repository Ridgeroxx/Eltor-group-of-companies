// main.js

// Handle quote form submission
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Retrieve form data
        const formData = new FormData(this);
        // Send form data to server (you'll need to implement server-side handling)
        fetch('/submit-quote', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Display success message or handle response accordingly
            alert('Quote request submitted successfully!');
            // Optionally, clear form fields
            this.reset();
        })
        .catch(error => {
            console.error('Error submitting quote request:', error);
            alert('An error occurred. Please try again later.');
        });
    });
}

