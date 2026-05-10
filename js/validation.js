document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-container form');
  if(!form) return;

  const nameInput = document.getElementById('contact-name');
  const addressInput = document.getElementById('contact-address');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const feedbackMsg = document.getElementById('form-feedback');


  if(sessionStorage.getItem('userName')) {
    nameInput.value = sessionStorage.getItem('userName');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    

    if(nameInput) nameInput.classList.remove('input-error');
    if(addressInput) addressInput.classList.remove('input-error');
    if(messageInput) messageInput.classList.remove('input-error');
    feedbackMsg.innerHTML = '';
    feedbackMsg.className = 'feedback-msg';


    if (!nameInput || nameInput.value.trim() === '') {
      if(nameInput) nameInput.classList.add('input-error');
      isValid = false;
    }


    if (!addressInput || addressInput.value.trim() === '') {
      if(addressInput) addressInput.classList.add('input-error');
      isValid = false;
    }


    if (!messageInput || messageInput.value.trim().length < 5) {
      if(messageInput) messageInput.classList.add('input-error');
      isValid = false;
    }

    if (isValid) {

      let userConfirm = confirm("Are you sure you want to send this message?");
      if(userConfirm) {

        sessionStorage.setItem('userName', nameInput.value.trim());

        let subjectValue = subjectInput ? subjectInput.value : 'None';

        feedbackMsg.innerHTML = `
          <div style="margin-top: 20px; padding: 15px; background-color: white; border-left: 4px solid var(--color-tech-cyan); text-align: left; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h4 style="margin-top: 0; color: var(--color-academic-blue); margin-bottom: 10px;">Demande bien envoyée !</h4>
            <p style="margin: 5px 0; color: #555;"><strong>Name:</strong> ${nameInput.value}</p>
            <p style="margin: 5px 0; color: #555;"><strong>Address:</strong> ${addressInput.value}</p>
            <p style="margin: 5px 0; color: #555;"><strong>Subject:</strong> ${subjectValue}</p>
            <p style="margin: 5px 0; color: #555;"><strong>Message:</strong> ${messageInput.value}</p>
          </div>
        `;
        feedbackMsg.classList.add('success');
        form.reset();
        

        if(sessionStorage.getItem('userName')) {
          nameInput.value = sessionStorage.getItem('userName');
        }
      } else {
        feedbackMsg.textContent = 'Envoi annulé.';
        feedbackMsg.classList.add('error');
      }
    } else {
      feedbackMsg.textContent = 'Please fill in all fields correctly.';
      feedbackMsg.classList.add('error');
    }
  });
});
