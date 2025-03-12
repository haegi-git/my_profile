import { GoArrowDown } from "react-icons/go";
import PortfolioItem from "./PortfolioItem";
import movo from "../../assets/movo.png";
import weather from "../../assets/weather.png";

export default function Portfolio() {
  const portfolioData = [
    {
      title: "운동인들의 커뮤니티 Movo",
      period: "2024.11.05 ~ 2024.12.03",
      team: 3,
      tech: ["React", "Java", "Spring Boot", "MySQL"],
      github: "https://github.com/sportsProject1/sports",
      link: "http://116.34.191.73:3000/",
      description:
        "운동인들을 위한 커뮤니티로\n함께 운동할 수 있는 친구를 찾을 수 있고,\n운동에 대한 정보를 공유할 수 있는 커뮤니티입니다.\n현재는 제 개인 서버에 배포되어 있습니다.",
      direction: "left",
      img: movo,
    },
    {
      title: "날씨 정보 제공 사이트",
      period: "2025.02.19 ~ 2024.03.07",
      team: 3,
      tech: ["React", "Java", "Spring Boot", "MySQL"],
      github: "https://github.com/Weather-project-team/weather",
      link: "",
      description:
        "기상청 api를 사용하여 현재 위치의 날씨와\n 관심있는 지역의 날씨를 제공하며 \n 디자인에 있어서 유행하는 \n 밈을 섞어 만든 사이트입니다. \n 현재 배포는 미완성으로 진행중입니다.",
      direction: "right",
      img: weather,
    },
    {
      title: "모바일 게임 정보와 유용한 기능 사이트",
      period: "2025.03.12 ~ 진행 중",
      team: 3,
      tech: ["Next.js", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/Weather-project-team/MBNProjdect",
      description:
        "모바일 게임의 정보를 공유할 수 있고 \n 보스의 젠 시간을 알려주는 기능을 제공하는 \n 유용한 사이트를 계획 및 제작중입니다.",
      direction: "left",
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden bg-gray-900 text-white pt-10 pb-10">
      <div className="text-3xl flex flex-col items-center">
        <h1>Portfolio</h1>
        <GoArrowDown className="size-10 mt-4 text-b animate-bounce" />
      </div>
      {portfolioData.map((portfolio, index) => (
        <PortfolioItem key={index} {...portfolio} />
      ))}
    </div>
  );
}
