        const menuButton = document.querySelector('#menu-btn');
const mobileM = document.querySelector('.links');

// Toggle menu function
menuButton.addEventListener('click', ()=>{
    mobileM.classList.toggle('mobile-menu');
});

function closeMenu() {
    mobileM.classList.remove('mobile-menu');
}





  document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const btn = document.getElementById('submit-btn');
        
        // Disable button to prevent double submission
        btn.disabled = true;
        btn.textContent = 'Sending...';
        
        // Collect form data
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
           
            
        };
//send email
emailjs.send('mitha123', 'thamsanqa123', templateParams)
            .then(function(response) {
                window.alert('Message sent successfully! Thank you for reaching out. We will get back to you soon.');
                document.getElementById('contact-form').reset();
            })
            .catch(function(error) {
             window.alert('Failed to send. Please try again.');
                console.log('Error:', error);
            })
            .finally(function() {
                btn.disabled = false;
                btn.textContent = 'Send Message';
            });
    });
