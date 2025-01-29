let id = document.getElementById("id");

let password = document.getElementById("password");
let eye = document.getElementById("eye");
let btn = document.getElementById("btn");

btn.disabled = true;

eye.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

function isDisabled() {
  if (id.value && password.value.length >= 4) {
    btn.disabled = false;
    btn.style.backgroundColor = "orange";
    btn.style.color = "white";
  } else {
    btn.disabled = true;
    btn.style.backgroundColor = "grey";
    btn.style.color = "black";
  }
}

id.addEventListener("input", () => {
  isDisabled();
});

password.addEventListener('input', ()=>{
    isDisabled()
})