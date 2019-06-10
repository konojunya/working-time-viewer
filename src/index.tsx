import { h, render } from "preact";

const Hello = () => <div>hello preact</div>;

render(<Hello />, document.getElementById("app")!);
