import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

export default function PortfolioPopup({
  title,
  images,
  skills,
  desc,
  close,
  link,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 다음 슬라이드 이동
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // 이전 슬라이드 이동
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const LinkGithub = () => {
    window.open(link[0]);
  };
  const LinkPage = () => {
    window.open(link[1]);
  };

  return (
    <div
      className="fixed inset-0 z-10 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div
        className="w-[80%] lg:w-[50%] bg-gray-200 rounded-lg z-20 
        flex flex-col items-center relative"
      >
        <h1 className="text-xl font-bold p-2">{title}</h1>

        {/* ✅ 슬라이드 애니메이션 적용 */}
        <div className="relative w-[80%] overflow-hidden">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10
             transform -translate-y-1/2 cursor-pointer p-2
             rounded-full"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <FaArrowLeft />
          </button>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                className="w-full h-[200px] lg:h-[300px] object-cover rounded-lg flex-shrink-0"
                src={img}
                alt={`Slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10
             transform -translate-y-1/2
              cursor-pointer p-2
             rounded-full"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="text-sm w-full pl-8 pr-8 lg:ml-30 mt-4">
          <h2 className="font-bold text-xl">Skills</h2>
          <ul className="flex text-xl mt-2">
            {(skills || []).map((Icon, idx) => (
              <li key={idx} className="mr-4">
                {Icon}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm w-full pl-8 pr-8 lg:ml-30">
          <h2 className="font-bold text-lg mt-2 mb-2">Overview</h2>
          <p className="whitespace-pre-line leading-2.5">{desc}</p>
        </div>

        <div className="text-sm w-full pl-8 pr-8 lg:ml-30">
          <h2 className="font-bold text-lg mt-2 mb-2">Link</h2>
          <p className="whitespace-pre-line leading-2.5 text-3xl flex">
            <FaGithub className="cursor-pointer mr-3" onClick={LinkGithub} />{" "}
            <IoHomeSharp onClick={LinkPage} className="cursor-pointer" />
          </p>
        </div>

        <button onClick={close} className="mt-4 cursor-pointer text-lg">
          Close
        </button>
      </div>
    </div>
  );
}
