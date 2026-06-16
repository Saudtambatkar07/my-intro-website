function send() {
    let input = document.getElementById("input");
    let chatbox = document.getElementById("chatbox");

    let msg = input.value;
    if (!msg) return;

    chatbox.innerHTML += "<div><b>You:</b> " + msg + "</div>";

    msg = msg.toLowerCase();

    let reply = "I am still learning 🤖";

    if (msg.includes("hello")) reply = "Hello 👋 I'm Saud's AI assistant.";
    else if (msg.includes("skills")) reply = "HTML, CSS, JavaScript, Flutter.";
    else if (msg.includes("project")) reply = "Portfolio website + Flutter app idea.";
    else if (msg.includes("contact")) reply = "Email: saudtambatkar74@gmail.com";
    else if (msg.includes("who are you")) reply = "I am a portfolio assistant built for Saud.";

    chatbox.innerHTML += "<div><b>AI:</b> " + reply + "</div>";

    input.value = "";
}

function scrollToChat() {
    document.getElementById("chat").scrollIntoView({behavior:"smooth"});
}