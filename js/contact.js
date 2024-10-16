const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Отправляю...';

   const serviceID = 'default_service';
   const templateID = 'template_63angpd';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Отправить';
       // Disable the button
      btn.disabled = true;
    
    // Re-enable the button after n seconds (e.g., 5 seconds)
    setTimeout(function() {
        btn.disabled = false;
    }, 50000); // 5000ms = 5 seconds
    }, (err) => {
      btn.value = 'Отправить';
      alert(JSON.stringify(err));
    });
});