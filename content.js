let vidRe = new RegExp("//f.video.*,video");

chrome.runtime.onMessage.addListener(async function(msg, sender, sendResponse){
	if(msg.toContent == "callingContent"){
		ele = document.getElementById("playVideo");
		rawurl = vidRe.exec(ele.innerHTML)[0];
		sendResponse(rawurl);
	}
});