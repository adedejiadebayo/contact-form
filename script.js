// Simple form validation and feedback
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const inquiry = document.getElementById('inquiry').value;
    const contactMethod = form.querySelector('input[name="contact_method"]:checked');
    if (!contactMethod) {
        alert('Please select your preferred contact method.');
        return;
    }
    if (!inquiry) {
        alert('Please select an inquiry type.');
        return;
    }
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    alert('Thank you for contacting us, ' + name + '!');
    form.reset();
});
