import { h, Component } from "preact";
import { WorkingTime } from "../elements/WorkingTime";

interface State {
  worker: {
    [x: string]: number;
  };
}

export class App extends Component<{}, State> {
  public state = {
    worker: {}
  };

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
      this.setState({
        worker: e.data
      });
    };
  }

  render() {
    return <WorkingTime worker={this.state.worker} />;
  }
}
