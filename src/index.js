document.onkeyup = function (event) {
    const code = event.keyCode;
    document.getElementById("content").innerText =
        document.getElementById("content").innerText + "You just pressed key code: " + code + "\n";
};
