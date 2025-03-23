import { FaReact, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa6";
import {
  SiJavascript,
  SiNextdotjs,
  SiSpring,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { useState } from "react";
export default function Skills() {
  const [stack, setStack] = useState("frontend");

  const stackIcons = {
    frontend: [
      { icon: FaHtml5, name: "HTML", level: "7.5" },
      { icon: FaCss3Alt, name: "CSS", level: "5.5" },
      { icon: SiJavascript, name: "JavaScript", level: "6.5" },
      { icon: FaReact, name: "React", level: "7.5" },
      { icon: SiNextdotjs, name: "Next.js", level: "5" },
    ],
    backend: [
      { icon: FaNode, name: "Node.js", level: "5" },
      { icon: FaJava, name: "Java", level: "5" },
      { icon: SiSpring, name: "Spring", level: "5.5" },
    ],
    database: [
      { icon: SiMysql, name: "MySQL", level: "4" },
      { icon: SiMongodb, name: "MongoDB", level: "4" },
    ],
  };
  const icons = stackIcons[stack] || [];
  return (
    <div className="pt-5 pl-4 pr-4">
      <h1 className="font-bold text-4xl mb-2">Skills</h1>
      <div className="bg-gray-400 p-4 rounded-lg flex flex-col">
        <div className="flex justify-between">
          <h2
            onClick={() => {
              setStack("frontend");
            }}
            className="font-bold text-lg"
          >
            Frontend
          </h2>
          <h2
            onClick={() => {
              setStack("backend");
            }}
            className="font-bold text-lg"
          >
            Backend
          </h2>
          <h2
            onClick={() => {
              setStack("database");
            }}
            className="font-bold text-lg"
          >
            Database
          </h2>
        </div>

        <ul className="flex flex-wrap text-2xl leading-7 justify-center mt-2">
          {icons.map(({ icon: Icon, name, level }, idx) => (
            <li className="flex flex-col items-center p-3" key={idx}>
              <Icon />
              <p className="text-[10px] text-center leading-3.5">
                {name}
                <br />
                level : {level}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
