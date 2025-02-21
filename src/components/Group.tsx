import { StaticImageData } from "next/image";
import React from "react";
import Tech from "./Tech";
interface Obj {
  time?: string;
  title: string;
  info: string;
  tech?: string[];
  url?: string;
}

interface Props {
  obj: Obj;
  img?: any;
}

const Group: React.FC<Props> = (Props) => {
  const { time, title, info, tech, url } = Props.obj;
  const { img } = Props;
  // console.log("obj", Props.obj);
  // console.log("year", time);
  return (
    <a
      className="group flex"
      href={url ? url : "#"}
      target="_blank"
      key={title}
    >
      <div className="group_left">
        <div className="group_time mb20">{time}</div>
        <div>{img ? <img src={img.src} className="group_img" /> : ""}</div>
      </div>
      <div className="group_right">
        <h3 className="mb20 white">{title}</h3>
        <div className="mb20 group_info">{info}</div>
        <footer className="group_footer flex">
          {tech
            ? tech.map((value, index) => {
                return (
                  <div key={index}>
                    <Tech txt={value} />
                  </div>
                );
              })
            : ""}
        </footer>
      </div>
    </a>
  );
};

export default Group;
