let dlbutton = document.getElementById("dlvid");

dlbutton.addEventListener("click", async () => {
	chrome.runtime.sendMessage({clicked: "yes"});
})