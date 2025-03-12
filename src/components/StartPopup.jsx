export default function StartPopup({ fadeGreetings }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex flex-col
     justify-center items-center bg-gray-900 text-white
     ${fadeGreetings ? "opacity-0" : "opacity-100"}
     transition-opacity duration-1000`}
    >
      <h1 className="text-4xl">안녕하세요, 개발자 배해기입니다.</h1>
      <p className="text-2xl mt-5 mb-5">
        저의 프로필 사이트에 방문해주셔서 감사합니다.
      </p>
      <p>아무 곳이나 클릭해주세요!</p>
    </div>
  );
}
