const worker = new Worker("./worker", { type: "module" });

const setDOMInfo = (info: string) => {
  if (info == null) {
    // error
  }
  worker.postMessage(info);
};

async function run() {
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
  worker.onmessage = (e: MessageEvent) => {
    console.log(e.data);
  };
}

window.addEventListener("DOMContentLoaded", run);
