
let formData = {
  email: "",
  message: "",
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';


const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedData) {
  formData = savedData; 
  form.elements.email.value = savedData.email || "";
  form.elements.message.value = savedData.message || "";
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

 
  if (!(name in formData)) return;

  formData[name] = value; 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  formData.email = formData.email.trim();
  formData.message = formData.message.trim();

  console.log(formData);


  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" }; 
  form.reset();
});
