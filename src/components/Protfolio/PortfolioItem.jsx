import { useState, useEffect, useRef } from "react";

import { FaGithub, FaLink } from "react-icons/fa";

export default function PortfolioItem({
  title,
  period,
  team,
  tech,
  github,
  link,
  description,
  direction,
  img,
}) {
  const [scrollPos, setScrollPos] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const itemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    if (itemRef.current) {
      setOffsetTop(itemRef.current.offsetTop);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 🎯 마지막 아이템도 확실하게 등장하도록 progress 수정
  const progress = Math.min(
    Math.max(
      (scrollPos + windowHeight - offsetTop + 200) / (windowHeight * 0.5),
      0
    ),
    1
  );

  // 🎯 이동 거리 조정 (최대 35vw → 최소 8vw)
  const moveDistance = Math.max((1 - progress) * 35, 8);

  return (
    <div
      ref={itemRef}
      className={`relative flex flex-col md:flex-row items-start md:items-center my-24 gap-16 transition-transform duration-800 ease-out w-11/12 max-w-screen-lg mx-auto ${
        direction === "right" ? "md:flex-row-reverse" : ""
      }`}
      style={{
        transform:
          direction === "left"
            ? `translateX(-${moveDistance}vw)`
            : `translateX(${moveDistance}vw)`,
        opacity: progress,
      }}
    >
      {/* 포트폴리오 정보 */}
      <div
        className={`flex flex-col bg-gray-900 text-white p-6 rounded-lg shadow-lg w-5/12 min-h-[150px] ${
          direction === "left" ? "ml-10" : "mr-10"
        }`}
      >
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="mt-2">작업 기간: {period}</p>
        <p>작업 인원: {team}명</p>
        <p>사용 기술: {tech.join(", ")}</p>
        <p className="flex mt-3">
          <FaGithub
            onClick={() => window.open(github)}
            className="size-7 mr-3 cursor-pointer hover:text-gray-500"
          />
          <FaLink
            onClick={() => window.open(link)}
            className="size-7 mr-3 cursor-pointer"
          />
        </p>
      </div>

      {/* 설명 문구 */}
      <div
        className={`text-white bg-gray-800 p-6 rounded-lg shadow-md w-5/12 min-h-[150px] ${
          direction === "left" ? "mr-10" : "ml-10"
        }`}
      >
        <img
          src={img ? img : "https://via.placeholder.com/300"}
          alt="랜덤 이미지"
          className="w-64 h-40 rounded-lg shadow-md m-auto mb-5"
        />

        <span>
          {description.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </span>
      </div>
    </div>
  );
}
