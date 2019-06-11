import { h, render } from "preact";
import { App } from "./components/App";
import { Demo } from "./components/demo";

const Component = process.env.NODE_ENV === "demo" ? Demo : App;
render(<Component />, document.getElementById("app")!);
