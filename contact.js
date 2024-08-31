document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form); // Collect form data

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you! Your message has been sent.');
                form.reset(); // Optionally reset the form
            } else {
                alert('Sorry, something went wrong. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, something went wrong. Please try again later.');
        });
    });
});
