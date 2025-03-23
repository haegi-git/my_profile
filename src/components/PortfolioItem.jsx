export default function PortfolioItem({ title, img, click }) {
  return (
    <div
      onClick={click}
      className="w-[80%] lg:w-[20%] h-[200px]
       bg-gray-400 rounded-lg mt-2
        flex flex-col items-center justify-center
        lg:mr-5 cursor-pointer"
    >
      <img
        className="w-[80%] h-[130px] object-cover mb-2 rounded-lg"
        src={img}
        alt="포트폴리오1"
      />
      <h2 className="text-sm text-center">{title}</h2>
    </div>
  );
}
