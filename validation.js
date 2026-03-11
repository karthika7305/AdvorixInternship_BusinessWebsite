const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Message sent successfully!";
  contactForm.reset();
});

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if(email === "" || password === "") {
      loginMessage.style.color = "red";
      loginMessage.textContent = "Please fill all fields.";
    } else {
      loginMessage.style.color = "green";
      loginMessage.textContent = "Login successful!";
      loginForm.reset();
    }
  });
}

