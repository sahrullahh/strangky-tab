chrome.runtime.onInstalled.addListener(() => {
	chrome.tabs.create({
		active: true,
	});
});

function injectFunction() {
	// code with on click tabs
}

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: injectFunction,
	});
});
