// Toggle navigation menu visibility
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('visible');
}

// Attach event listener to the hamburger icon
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
// Form validation for the contact form
document.querySelector('#contact form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#contact input[name="name"]');
    const email = document.querySelector('#contact input[name="email"]');
    const message = document.querySelector('#contact textarea[name="message"]');

    if (!name.value || !email.value || !message.value) {
        alert('Please fill in all fields.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    this.reset();
});