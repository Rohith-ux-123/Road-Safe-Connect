document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const accidentForm = document.getElementById('accidentForm');

  if(registerForm){
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Vehicle registered successfully!');
      registerForm.reset();
    });
  }

  if(accidentForm){
    accidentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Accident reported successfully!');
      accidentForm.reset();
    });
  }
});
