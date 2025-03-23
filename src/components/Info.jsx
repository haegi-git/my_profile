import haegi from "../assets/배해기.jpg";
import { FaGithub } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

export default function Info() {
  return (
    <>
      <div className="lg:flex lg:flex-col ">
        <div
          className="w-full flex justify-center
       items-center pt-[30px] border-b-2 pb-[30px]
       lg:pb-[10px]
        border-gray-800 lg:border-none"
        >
          <img
            className="w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] rounded-full"
            src={haegi}
            alt="프로필 사진"
          />
        </div>
        <div className="w-full pt-[15px] pl-4 pr-4">
          <h1 className="font-bold text-4xl">Info</h1>
          <div className="flex justify-between  mt-2 text-sm">
            <div>
              <p>배해기</p>
              <p>1997.04.12</p>
              <p>010.8807.2713</p>
            </div>
            <div className="text-right">
              <p className="flex justify-end text-2xl">
                <FaGithub
                  onClick={() => window.open("https://github.com/haegi-git")}
                  className="mr-3 cursor-pointer"
                />{" "}
                <IoHomeSharp
                  onClick={() => {
                    window.open("https://hongsi163.tistory.com/");
                  }}
                  className=" cursor-pointer"
                />
              </p>
              <p>b_haegi@naver.com</p>
              <p>frontend developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
