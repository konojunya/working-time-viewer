import { h, Component } from "preact";

interface Props {
  worker: {
    [x: string]: number;
  };
}

export class WorkingTime extends Component<Props> {
  render() {
    return (
      <ul>
        {Object.entries(this.props.worker).map(worker => (
          <li>
            <p>name: {worker[0]}</p>
            <p>value: {worker[1]}</p>
          </li>
        ))}
      </ul>
    );
  }
}
