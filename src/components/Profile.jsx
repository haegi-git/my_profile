import profile from "../assets/배해기.jpg";
import { FaGithub, FaLink } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="flex w-full text-white bg-gray-900 justify-center pt-10 pb-10 border-b-2 border-white">
      <div className="flex flex-col items-center w-1/4">
        <img className="w-[300px] h-[400px]" src={profile} />
      </div>

      <div className="border-l-2 border-r-2 px-10 border-white flex items-start w-2/4">
        <p className="text-lg/13">
          안녕하세요, 개발자 배해기입니다.
          <br />
          프론트엔드 개발자를 목표로 개발 공부를 시작하였고, 현재는 풀스택
          개발자를 목표로 성장하는 중입니다.
          <br />
          HTML과 CSS, 그리고 JavaScript를 시작으로 현재는 React를 중점적으로
          사용하는 프론트엔드 개발자이며,
          <br />
          풀스택을 위해 Java와 Spring Boot를 배우고 사용해 본 경험이 있습니다.
          <br />
          현재는 Next.js를 학습하여 프로젝트에 적용해 보며 실력을 키우고
          있습니다.
          <br />
          저의 프로젝트들은 GitHub에서 확인하실 수 있으며, 제 개인 PC의 Ubuntu
          서버에 배포되어 있습니다.
          <br />
          디자인은 다소 많이 미흡하나 다시 한 번 방문해 주셔서 감사합니다.
        </p>
      </div>

      <div className="flex flex-col items-center justify-start w-1/4 text-lg/13">
        <p>
          이름 : 배해기
          <br />
          phone : 010-8807-2713
          <br />
          email : b_haegi@naver.com
        </p>
        <p className="flex mt-2">
          <FaGithub
            onClick={() => window.open("https://github.com/haegi-git")}
            className="size-7 mr-3 cursor-pointer hover:text-gray-500"
          />
          <FaLink
            onClick={() => window.open("https://hongsi163.tistory.com/")}
            className="size-7 mr-3 cursor-pointer hover:text-gray-500"
          />
        </p>
      </div>
    </div>
  );
}
