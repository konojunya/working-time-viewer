import { h, Component } from "preact";
import { WorkingTime } from "../elements/WorkingTime";
import { ErrorView } from "../elements/ErrorView";

interface State {
  hasError: boolean;
}

export class Demo extends Component<{}, State> {
  private mock = {
    konojunya: 10,
    kinokoruumu: 10
  };

  public state = {
    hasError: false
  };

  componentDidMount() {
    try {
      throw new Error("hohge");
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
      <WorkingTime worker={this.mock} />
    );
  }
}
