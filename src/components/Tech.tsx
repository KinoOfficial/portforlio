import React from "react";

interface Props {
  txt: string;
}

const Tech: React.FC<Props> = (Props) => {
  const { txt } = Props;
  return (
    <div className="techIndex mb20" key={txt}>
      <span className="techIndex_txt">{txt}</span>
    </div>
  );
};

export default Tech;
