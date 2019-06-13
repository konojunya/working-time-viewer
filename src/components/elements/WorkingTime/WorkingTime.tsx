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
            <img
              src={`https://github.com/${worker[0]}.png`}
              alt="avatar image"
            />
            <div>
              <a
                href={`https://github.com/${worker[0]}`}
                target="_blank"
                rel="noopener"
              >
                @{worker[0]}
              </a>
              <br />
              <p>
                {worker[1]}
                <span>hour</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
