const worker = new Worker("./worker", { type: "module" });

const setDOMInfo = (info: string) => {
  console.log(info);
};

window.addEventListener("DOMContentLoaded", () => {
  initialize();
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id!,
        {
          from: "popup",
          subject: "DOMInfo"
        },
        setDOMInfo
      );
    }
  );
});

async function initialize() {
  worker.onmessage = (e: MessageEvent) => {
    console.log("onmessage");
    console.log(e.data);
  };
  worker.postMessage("hoge");
}
