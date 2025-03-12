import { GoArrowDown } from "react-icons/go";
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import classNames from "classnames";

export default function Skills() {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white pt-10 pb-10">
      {/* 타이틀 */}
      <div className="text-3xl flex flex-col items-center">
        <h1>My Skills</h1>
        <GoArrowDown className="size-10 mt-4 text-b animate-bounce" />
      </div>

      {/* 기술 목록 */}
      <div className="flex justify-center w-4/5 mt-10">
        {/* Frontend */}
        <div className="flex flex-col items-center w-1/3">
          <h1 className="text-blue-400">Frontend</h1>
          <div className="flex mt-3 gap-x-5">
            {renderSkill(FaHtml5, "HTML5", "orange", "level - 8")}
            {renderSkill(FaCss3Alt, "CSS3", "blue", "level - 5")}
            {renderSkill(IoLogoJavascript, "JavaScript", "yellow", "level - 6")}
            {renderSkill(FaReact, "React", "blue", "level - 7.5")}
            {renderSkill(FaVuejs, "Vue.js", "green", "level - 3.5")}
          </div>
        </div>

        {/* Backend */}
        <div className="flex flex-col items-center w-1/3">
          <h1 className="text-blue-400">Backend</h1>
          <div className="flex mt-3 gap-x-5 justify-center">
            {renderSkill(FaNode, "Node.js", "green", "level - 4")}
            {renderSkill(FaJava, "Java", "red", "level - 6")}
            {renderSkill(SiSpring, "Spring Boot", "green", "level - 6")}
          </div>
        </div>

        {/* Database */}
        <div className="flex flex-col items-center w-1/3">
          <h1 className="text-blue-400">Database</h1>
          <div className="flex mt-3 justify-center">
            {renderSkill(GrMysql, "MySQL", "blue", "level - 4")}
          </div>
        </div>
      </div>
    </div>
  );
}

function renderSkill(Icon, label, color, description) {
  const colorClasses = {
    orange: "hover:text-orange-500",
    blue: "hover:text-blue-500",
    yellow: "hover:text-yellow-400",
    green: "hover:text-green-500",
    red: "hover:text-red-600",
  };

  return (
    <div className="flex flex-col items-center group">
      <Icon
        className={classNames(
          "size-15 transition-colors duration-300 text-white",
          colorClasses[color]
        )}
      />
      <span className="mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
      <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-400">
        {description}
      </span>
    </div>
  );
}
