document.querySelector('.contact-form form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/Crossmt001@gmail.com', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      if (result.success) {
        alert('Message sent!');
        form.reset();
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });
    // Initialize EmailJS with your Public Key
    (function() {
        emailjs.init({
          publicKey: "YOUR_PUBLIC_KEY", // Get this from EmailJS dashboard
        });
      })();
    
      // Handle form submission
      document.querySelector('.contact-form form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const form = e.target;
        
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
          .then(() => {
            alert('Message sent successfully!');
            form.reset(); // Clear the form
          }, (error) => {
            alert('Failed to send: ' + error.text);
          });
      });