import { useState } from "react";
import movo from "../assets/movo.png";
import movoMain from "../assets/movo_main.png";
import movoLogin from "../assets/movo_login.png";
import movoBoard from "../assets/movo_board.png";
import movoBoardItem from "../assets/movo_board_item.png";
import weather from "../assets/weather.png";
import loding from "../assets/loding.png";

import { FaReact, FaGit, FaNode } from "react-icons/fa";
import {
  SiSpring,
  SiMysql,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa6";

import PortfolioItem from "./PortfolioItem";
import PortfolioPopup from "./PortfolioPopup";

export default function Portfolio() {
  const items = [
    {
      title: "운동인들의 커뮤니티 - Movo",
      img: [movo, movoMain, movoLogin, movoBoard, movoBoardItem],
      skills: [<FaReact />, <SiSpring />, <SiMysql />],
      desc: `운동인을 위한 커뮤니티를 주제로
      \n
      저는프론트엔드 개발을 담당했습니다.
      \n
      React를 사용하여 페이지를 구성하였으며,
       \n
       Websocket을 사용하여
       \n
       실시간 채팅을 구현하였습니다.
       \n
       현재는 개인 Ubuntu 서버에
       \n
       배포되어있습니다.`,
      link: [
        "https://github.com/sportsProject1/sports",
        "http://116.34.191.73:3000/",
      ],
    },
    {
      title: "현재 위치 기반의 날씨 알리미",
      img: [weather],
      skills: [<FaReact />, <SiSpring />, <SiMysql />],
      desc: `기상청 Api를 사용한
      \n
      날씨를 불러오는 Api로서
      \n
      저는 ForntEnd 부분을 전반 담당하였고
       \n
       현재는 저의 Ubuntu 서버에 배포되었으며
       \n
       도메인을 구매하지않아
       \n
       정상작동은 보기 힘들다는점
       \n
       양해바랍니다.`,
      link: [
        "https://github.com/Weather-project-team/weather.git",
        "http://116.34.191.73:3100/",
      ],
    },
    {
      title: "모바일 게임 커뮤니티 - MBN",
      img: [loding],
      skills: [<SiNextdotjs />, <SiMongodb />],
      desc: `현재 진행중인 프로젝트입니다.\n
      미완성이기에 배포되지않아 테스트는 불가능합니다.\n
      진행도 또는 코드를 보고싶으시다면\n
      깃허브는 접속이 가능합니다.\n
      감사합니다.`,
      link: [
        "https://github.com/Weather-project-team/MBNProjdect",
        "https://github.com/Weather-project-team/MBNProjdect",
      ],
    },
  ];
  const [popup, setPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
    setPopup(!popup);
  };

  const closePopup = () => {
    setPopup(false);
  };
  console.log(selectedItem);
  return (
    <div className="pt-5 pl-4 pr-4">
      <h1 className="font-bold text-4xl">Portfolio</h1>
      <div
        className="flex flex-col justify-center items-center
       lg:justify-start lg:items-start lg:flex-row"
      >
        {items.map((item, idx) => {
          return (
            <PortfolioItem
              click={() => {
                handleClick(item);
              }}
              key={idx}
              title={item.title}
              img={item.img[0]}
            />
          );
        })}
      </div>
      {popup && selectedItem && (
        <PortfolioPopup
          title={selectedItem.title}
          images={selectedItem.img}
          skills={selectedItem.skills}
          desc={selectedItem.desc}
          link={selectedItem.link}
          close={closePopup}
        />
      )}
    </div>
  );
}
