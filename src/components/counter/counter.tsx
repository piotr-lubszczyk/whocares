import React from "react";
import ProgressBar from "../progress-bar";
import RandomText from "../random-text";

interface Props {
  subject: string;
}

const Counter: React.FunctionComponent<Props> = ({ subject }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const increment = () =>
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    setInterval(increment, 100);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {progress < 100 ? (
        <>
          <ProgressBar progress={progress} />
          <RandomText />
        </>
      ) : (
        <div>0 people cares about {subject}</div>
      )}
    </div>
  );
};

export default Counter;
