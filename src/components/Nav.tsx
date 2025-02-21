"use client";
import React, { useState, useEffect } from "react";
interface Props {
  text: string;
  positionYMin: number;
  positionYMax: number;
}

const Nav: React.FC<Props> = (Props) => {
  const [down, setDown] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [color, setColor] = useState("rgb(148, 163, 184)");
  const [lineWidth, setLineWidth] = useState("30px");
  const hover = () => {
    setDown(!down);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // 监听滚动位置
    };

    window.addEventListener("scroll", handleScroll);
    if (scrollY >= Props.positionYMin && scrollY <= Props.positionYMax) {
      setColor("white");
      setLineWidth("60px");
    } else if (down) {
      setColor("white");
      setLineWidth("60px");
    } else {
      setColor("rgb(148, 163, 184)");
      setLineWidth("30px");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, down]);

  return (
    <a href="#" className="flex nav" onMouseEnter={hover} onMouseLeave={hover}>
      <div
        className="line"
        style={{
          height: "2px",
          width: lineWidth,
          backgroundColor: color,
          transition: "width 0.3s", // 渐变动画
        }}
      ></div>
      <div className="nav_txt bold" style={{ color: color }}>
        {Props.text}
        {/* {scrollY} */}
      </div>
    </a>
  );
};

export default Nav;
