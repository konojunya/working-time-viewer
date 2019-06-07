const worker = new Worker("./worker", { type: "module" });

async function initialize() {
  worker.onmessage = (e: MessageEvent) => {
    console.log("onmessage");
    console.log(e.data);
  };
  worker.postMessage("hogehoge");
}
initialize();
