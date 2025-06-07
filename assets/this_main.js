

async function checkPassword() {
    const input = document.getElementById("password").value;
    const message = document.getElementById("message");
    const hash_input = await getHash(input);

    //alert(publicKey);
    //alert(hash_input);
    
    if (hash_input == publicKey) {
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


async function hashText(text) {
    
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex
  }


async function getHash(text) {
  const hash = await hashText(text);
  console.log(hash);
  return hash;
}

const publicKey = "d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9";

