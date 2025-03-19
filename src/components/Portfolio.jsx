import { useState } from "react";
import movo from "../assets/movo.png";
import PortfolioItem from "./PortfolioItem";
import PortfolioPopup from "./PortfolioPopup";

export default function Portfolio() {
  const items = [
    {
      title: "운동인들의 커뮤니티 - Movo",
      img: movo,
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
      <div className="flex flex-col justify-center items-center">
        {items.map((item, idx) => {
          return (
            <PortfolioItem
              click={() => {
                handleClick(item);
              }}
              key={idx}
              title={item.title}
              img={item.img}
            />
          );
        })}
      </div>
      {popup && selectedItem && (
        <PortfolioPopup
          title={selectedItem.title}
          img={selectedItem.img}
          desc={selectedItem.desc}
          close={closePopup}
        />
      )}
    </div>
  );
}
