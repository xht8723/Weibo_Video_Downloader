let wbRe = new RegExp("weibo.com/tv/show/")

async function retrieveTabs(){
	chrome.tabs.query({active: true}, tabs => {
		let url = tabs[0].url;
		if(wbRe.test(url)){
			sendMsgToContent(tabs[0].id);
		}else{
			console.log("No weibo video page found.")
			return;
		}
	});
}

function replaceAmp(input){
	return input.replaceAll(/amp;/g, '');
}

function searchElement(vid){
	finalurl = replaceAmp(vid);
	startDownload(finalurl);
}

function startDownload(vidurl){
	vidurl = "https:"+vidurl;
	chrome.tabs.create({ url : vidurl});
}

async function sendMsgToContent(tabID){
	chrome.tabs.sendMessage(tabID, {toContent : "callingContent"}, searchElement);
}

chrome.runtime.onMessage.addListener(msg =>{
	if(msg.clicked == "yes") {
		retrieveTabs();
	}
})



chrome.runtime.onInstalled.addListener(() => {
});