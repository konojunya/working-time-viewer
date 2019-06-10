import { h, Component } from "preact";

export class App extends Component {
  async componentDidMount() {
    const worker = new Worker("../../extentions/worker", { type: "module" });
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
          (info: Object | null) => {
            worker.postMessage(info);
          }
        );
      }
    );
    worker.onmessage = (e: MessageEvent) => {
      console.log(e.data);
    };
  }
  render() {
    return <h1>hello preact</h1>;
  }
}
