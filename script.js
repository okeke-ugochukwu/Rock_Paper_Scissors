
function effect() {
    document.getElementById("playerName").style.color = "#1a142b";
    document.getElementById("nameLabel").style.color = "#1a142b";
    document.getElementById("playerName").style.border = "1px solid #1a142b";
}
function removeEffect() {
    document.getElementById("playerName").style.color = "#0d0a16b4";
    document.getElementById("nameLabel").style.color = "#0d0a16b4";
    document.getElementById("playerName").style.border = "1px solid #0d0a16b4";
}
function verify() {
    playerName = document.getElementById("playerName").value;
    localStorage.setItem("Call", playerName);
    
    if (playerName == "") {
       document.getElementById("alert").style.display = "block";
    }
    else {
        document.getElementById("alert").style.display = "none";     
        window.location = "main.html";
    }

}   