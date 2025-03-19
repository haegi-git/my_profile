import { FaReact } from "react-icons/fa";
import { SiSpring, SiMysql } from "react-icons/si";

export default function PortfolioPopup({ title, img, desc, close }) {
  return (
    <div
      className="fixed inset-0 z-10 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div
        className="w-[80%] bg-gray-200 rounded-lg z-20 
        flex flex-col items-center relative"
      >
        <h1 className="text-xl font-bold p-2">{title}</h1>
        <img className="w-[80%] h-auto rounded-lg" src={img} alt={img} />

        <div className="text-sm w-full pl-8 pr-8">
          <h2 className="font-bold text-xl">Skills</h2>
          <ul className="flex text-xl mt-2">
            <li className="mr-4">
              <FaReact />
            </li>
            <li className="mr-4">
              <SiMysql />
            </li>
            <li className="mr-4">
              <SiSpring />
            </li>
          </ul>
        </div>

        <div className="text-sm w-full pl-8 pr-8">
          <h2 className="font-bold text-lg mt-2 mb-2">Overview</h2>
          <p className="whitespace-pre-line leading-2.5">{desc}</p>
        </div>

        <button onClick={close} className="mt-4">
          Close
        </button>
      </div>
    </div>
  );
}
