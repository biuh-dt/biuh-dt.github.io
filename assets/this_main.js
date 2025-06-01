
const correctPassword = "hallo";

function checkPassword() {
    const input = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (input === correctPassword) {
      // 保存验证状态
      localStorage.setItem("authenticated", "true");

      showContent();
    } else {
      message.textContent = "Wrong!";
    }
  }

function showContent() {
    document.getElementById("password-form").style.display = "none";
    document.getElementById("protected-content").style.display = "block";
  }

  // 页面加载时自动检查验证状态
window.onload = function () {
    if (localStorage.getItem("authenticated") === "true") {
      showContent();
    }
  }

  // 监听回车
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("password").addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        checkPassword();
      }
    });
  });

