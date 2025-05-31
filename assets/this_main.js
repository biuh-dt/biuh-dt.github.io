<script>
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

  // 添加回车监听
  document.getElementById("password").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkPassword();
    }
  });
</script>
