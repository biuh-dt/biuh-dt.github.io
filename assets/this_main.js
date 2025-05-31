const correctPassword = "dt@biuh";
function checkPassword() {
              const input = document.getElementById("password").value;
              const message = document.getElementById("message");

              if (input === correctPassword) {
                  document.getElementById("password-form").style.display = "none";
                  document.getElementById("protected-content").style.display = "block";
              } else {
                  message.textContent = "Wrong!";
              }
          }
