let clipboardHistory = [];

function cleanText(text) {
    return text
        .replace(/[™®©…]/g, '')
        .replace(/\s{2,}/g, ' ')
        .replace(/(<([^>]+)>)/gi, '')
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .trim();
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "copied") {
        const cleaned = cleanText(message.data);
        clipboardHistory.push({
            original: message.data,
            cleaned: cleaned,
            time: new Date().toISOString()
        });
        chrome.storage.local.set({ clipboardHistory });
    }
});