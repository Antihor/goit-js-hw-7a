const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;
  const trimmedMail = email.value.trim();
  const trimmedPW = password.value.trim();
  const message = {
    email: trimmedMail,
    password: trimmedPW,
  };

  if (trimmedMail === '' || trimmedPW === '') {
    return alert('All form fields must be filled in');
  }
  console.log(message);

  event.currentTarget.reset();
}
