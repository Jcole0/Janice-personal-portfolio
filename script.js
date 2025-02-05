function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.classList.add('active');
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.classList.remove('active');
}
// Typewriter Effect
const typewriterText = document.querySelector('.typewriter-text');
const phrases = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Frontend Specialist',
    'Web Developer'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isEnd = true;
        isDeleting = true;
        setTimeout(typeWriter, 2000); // Wait at the end of phrase
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, 500); // Wait before starting new phrase
    } else {
        setTimeout(typeWriter, isDeleting ? 50 : 100); // Typing speed
    }
}

// Start the typewriter effect
window.onload = typeWriter

// Contact Form Animations
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn-3d');
            submitBtn.classList.add('is-loading');
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.classList.remove('is-loading');
                submitBtn.classList.add('is-success');
                
                // Reset form
                setTimeout(() => {
                    form.reset();
                    submitBtn.classList.remove('is-success');
                }, 2000);
            }, 2000);
        });
    }
    
    // Floating labels animation
    const formInputs = document.querySelectorAll('.input-animation input, .input-animation textarea, .input-animation select');
    
    formInputs.forEach(input => {
        // Check initial state
        if (input.value) {
            input.classList.add('has-value');
        }
        
        // Handle input changes
        input.addEventListener('input', function() {
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });
});

// WhatsApp Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const whatsappForm = document.getElementById('whatsappForm');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Format the message for WhatsApp
            const whatsappMessage = `*New Message from Portfolio*%0A%0A` +
                                  `*Name:* ${name}%0A` +
                                  `*Phone:* ${phone}%0A` +
                                  `*Subject:* ${subject}%0A%0A` +
                                  `*Message:*%0A${message}`;
            
           
            const whatsappNumber = '+23274751977'; 

            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn-3d');
            submitBtn.classList.add('is-loading');
            
            // Delay to show animation
            setTimeout(() => {
                // Open WhatsApp in new window
                window.open(whatsappUrl, '_blank');
                
                // Reset form and button state
                submitBtn.classList.remove('is-loading');
                whatsappForm.reset();
            }, 1000);
        });
    }
});

// Particle animation
function createParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach(particle => {
        const randomDelay = Math.random() * 5;
        particle.style.animationDelay = `${randomDelay}s`;
    });
}

createParticles();