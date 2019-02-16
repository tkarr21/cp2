document.getElementById("soundcloudSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const userName = document.getElementById("soundcloudInput").value;
    if (userName === "")
      return;
    console.log(userName)
});