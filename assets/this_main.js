
const correctPassword = "hallo";

function checkPassword() {
    const input = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (input === correctPassword) {
      //localStorage.setItem("authenticated", "true"); 
      sessionStorage.setItem("authenticated", "true");

      showContent();
    } else {
      message.textContent = "Wrong!";
    }
  }

function showContent() {
    document.getElementById("password-form").style.display = "none";
    document.getElementById("protected-content").style.display = "block";
    document.getElementById("loading").style.display = "none";
  }

window.onload = function () {
    //if (localStorage.getItem("authenticated") === "true") {
    if (sessionStorage.getItem("authenticated") === "true") {
      showContent();
    }
    document.getElementById("loading").style.display = "none";
    document.body.classList.remove("hidden-until-ready");
  }

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("password").addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        checkPassword();
      }
    });
  });

