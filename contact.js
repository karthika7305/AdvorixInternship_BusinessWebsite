const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if(contactForm){
  contactForm.addEventListener("submit", function(e){
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name === "" || email === "" || message === ""){
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill all fields.";
    } else if(!emailPattern.test(email)){
      formMessage.style.color = "red";
      formMessage.textContent = "Please enter a valid email.";
    } else {
      formMessage.style.color = "green";
      formMessage.textContent = "Message sent successfully!";
      setTimeout(() => {
        contactForm.reset();
        formMessage.textContent = "";
      }, 2000);
    }
  });
}