function openInvitation() {
document.getElementById("cover").style.display = "none";
document.getElementById("invitation").style.display = "block";

const music = document.getElementById("bgMusic");

music.load();

music.play()
    .then(() => console.log("Music playing"))
    .catch(err => alert("Music error: " + err));
    
}

function acceptInvite() {

let guestName = prompt("Please enter your name:");

fetch("https://docs.google.com/forms/d/e/1FAIpQLSf0Fn4VtlNHpLx3UT2BXR0pOfFZYprCPiHgBx4nDNZgWVOJBQ/formResponse", {
    method: "POST",
    mode: "no-cors",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body:
    "entry.1930180289=" + encodeURIComponent(guestName) +
    "&entry.1105545176=" + encodeURIComponent("Yes, I accept") +
    "&entry.673472413=" + encodeURIComponent("")
});

document.getElementById("response").innerHTML =
"🎉 Thank you for accepting! Your response has been recorded.";

}

function declineInvite() {

let guestName = prompt("Please enter your name:");

fetch("https://docs.google.com/forms/d/e/1FAIpQLSf0Fn4VtlNHpLx3UT2BXR0pOfFZYprCPiHgBx4nDNZgWVOJBQ/formResponse", {
    method: "POST",
    mode: "no-cors",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body:
    "entry.1930180289=" + encodeURIComponent(guestName) +
    "&entry.1105545176=" + encodeURIComponent("No, I cannot attend") +
    "&entry.673472413=" + encodeURIComponent("")
});

document.getElementById("response").innerHTML =
"Thank you. Your response has been recorded.";

}