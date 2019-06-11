import { h } from "preact";
import { WorkingTime } from "../elements/WorkingTime";

export const Demo = () => {
  const mock = {
    konojunya: 10,
    kinokoruumu: 10
  };

  return <WorkingTime worker={mock} />;
};
