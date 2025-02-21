"use client";
import React, { useEffect, useState } from "react";
import "../style/style.css";
import Nav from "../components/Nav";
import Group from "../components/Group";
import { valeoExp, aliExp, projIFA, projGP, projEZ } from "../const/index";
import valeoImg from "../img/valeo-logo.jpg";
import aliImg from "../img/ali.png";
import { FaGithub, FaQq } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { IoLogoWechat } from "react-icons/io5";
import { Dialog, DialogContent, Typography } from "@mui/material";
import wechatImg from "../img/wechatQR.pic.jpg";
import qqImg from "../img/qqQR.pic.jpg";
import { MdEmail } from "react-icons/md";

// import { FaQq } from "react-icons/fa";

interface Props {}

const page: React.FC<Props> = () => {
  // console.log(valeoImg);
  const expList = [
    { obj: valeoExp, img: valeoImg },
    { obj: aliExp, img: aliImg },
  ];
  const projList = [{ obj: projIFA }, { obj: projGP }, { obj: projEZ }];

  const [open, setOpen] = useState("close");
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [contactTxt, setContactTxt] = useState("");
  const handleClose = () => {
    setOpen("close");
    setImgSrc(null);
    console.log(open);
  };

  return (
    <div className="global">
      <div className="leftSide">
        <h1 className="mb20 white">Kino Jiang</h1>
        <h2 className="mb20 white">Software engineer</h2>
        <p style={{ width: "100%" }}>
          Start with the basics, embrace the challenges, and grow into a skilled
          IT professional.
        </p>
        <nav className="nav_container">
          <Nav text="About" positionYMin={0} positionYMax={500}></Nav>
          <Nav text="Experience" positionYMin={500} positionYMax={1100}></Nav>
          <Nav text="Project" positionYMin={1100} positionYMax={3500}></Nav>
        </nav>

        <div className="linkDiv flex ">
          <a href="https://github.com/KinoOfficial" target="_blank">
            <FaGithub className="icon" />
          </a>
          <a target="_blank" href="/file/resume.pdf">
            <IoIosDocument className="icon" />
          </a>
          <a
            target="_blank"
            onClick={() => {
              setOpen("wechat");
              setImgSrc(wechatImg.src);
              setContactTxt("微信号:jjy19960930");
            }}
          >
            <IoLogoWechat className="icon" />
          </a>
          <a
            target="_blank"
            onClick={() => {
              setOpen("qq");
              setImgSrc(qqImg.src);
              setContactTxt("QQ号:740258072");
            }}
          >
            <FaQq className="icon" />
          </a>
          <a
            target="_blank"
            onClick={() => {
              setOpen("email");
              setContactTxt("email:kinojiang930@gmail.com");
            }}
          >
            <MdEmail className="icon" />
          </a>
        </div>
        <Dialog open={open == "close" ? false : true} onClose={handleClose}>
          <DialogContent>
            {/* 显示二维码 */}
            {imgSrc && <img src={imgSrc} height={500} />}

            {/* 显示一些信息 */}
            <Typography variant="body1">{contactTxt}</Typography>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rightSide">
        <div className="about">
          <h2 className="nav_title">About</h2>
          <p className="mb20">
            Graduated from the University of New South Wales (UNSW) with a major
            in Information Technology, I am skilled in front-end technologies
            such as{" "}
            <span className="highlight">JavaScript, TypeScript, and React</span>
            .I have knowledge of back-end tools as well ,including{" "}
            <span className="highlight">
              Express with Node.js and Django with Python.
            </span>
            For database,I have experience of using SQL and NoSQl database such
            as <span className="highlight">MySql and MongoDB.</span>
            Additionally, I am proficient in{" "}
            <span className="highlight">Chinese and English</span> and have a
            working knowledge of{" "}
            <span className="highlight">Japanese and Korean,</span> which allows
            me to communicate across different languages and cultures
            effectively.
          </p>
          <p className="mb20">
            Currently, I am looking for a position as a{" "}
            <span className="highlight">Front-End or Full Stack Engineer</span>{" "}
            and hope to gain hands-on project experience and deepen my skills
            through my work.
          </p>

          <p className="mb20">
            In my spare time, I’m usually traveling, reading, and playing
            games.I also enjoy learning foreign languages as a way to better
            understand the traditions, history, and way of life in different
            countries. In the future, I aspire to visit more countries and
            immerse myself in diverse cultural environments.
          </p>
        </div>
        <div className="experience">
          <h2 className="nav_title">Experience</h2>
          {expList.map((value, index) => {
            return (
              <div key={index}>
                <Group obj={value.obj} img={value.img}></Group>
              </div>
            );
          })}
        </div>
        <div className="project">
          <h2 className="nav_title">Project</h2>
          {projList.map((value, index) => {
            return (
              <div key={index}>
                <Group obj={value.obj}></Group>
              </div>
            );
          })}
        </div>
        <p className="projIntro">
          Thank you for reading till the end! This website design is inspired by
          Brittany Chiang{" "}
          <a
            href="https://brittanychiang.com/#projects"
            target="_blank"
            className="highlight"
          >
            (https://brittanychiang.com/#projects)
          </a>
          , coded in Visual Studio Code,built with Next.js, and deployed with
          Vercel.
        </p>
      </div>
    </div>
  );
};

export default page;
