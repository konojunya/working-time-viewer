import { h, Component } from "preact";
import { WorkingTime } from "../elements/WorkingTime";
import { ErrorView } from "../elements/ErrorView";

interface State {
  worker: {
    [x: string]: number;
  };
  hasError: boolean;
}

export class App extends Component<{}, State> {
  public state = {
    worker: {},
    hasError: false
  };

  async componentDidMount() {
    try {
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
    } catch (e) {
      this.setState({
        hasError: true
      });
    }
  }

  render() {
    return this.state.hasError ? (
      <ErrorView />
    ) : (
      <WorkingTime worker={this.state.worker} />
    );
  }
}
