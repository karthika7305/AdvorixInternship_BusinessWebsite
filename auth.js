const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {
      loginMessage.style.color = "red";
      loginMessage.textContent = "Please fill all fields.";
    } else {
      loginMessage.style.color = "green";
      loginMessage.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);

      loginForm.reset();
    }
  });
}
const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");
if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (name === "" || email === "" || password === "") {
      signupMessage.style.color = "red";
      signupMessage.textContent = "Please fill all fields.";
    } else {
      signupMessage.style.color = "green";
      signupMessage.textContent = "Signup successful! Redirecting...";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);

      signupForm.reset();
    }
  });
}