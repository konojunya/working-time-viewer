chrome.runtime.onMessage.addListener((req, sender) => {
  if (req.from === "content" && req.subject === "showPageAction") {
    if (sender.tab && sender.tab.id) {
      chrome.pageAction.show(sender.tab.id);
    }
  }
});
