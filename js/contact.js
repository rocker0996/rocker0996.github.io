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
      alert('Отправлено!');
    }, (err) => {
      btn.value = 'Отправить';
      alert(JSON.stringify(err));
    });
});