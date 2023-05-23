import * as React from "react";
import { getRandomText } from "../../utils/get-random-text";

const RandomText: React.FunctionComponent = () => {
  const [text, setText] = React.useState("");
  React.useEffect(() => {
    setInterval(() => {
      setText(getRandomText());
    }, 1000);
  }, []);

  return <p>{text}</p>;
};

export default RandomText;
