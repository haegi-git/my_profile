export default function PortfolioItem({ title, img, click }) {
  return (
    <div
      onClick={click}
      className="w-[80%] h-[200px] bg-gray-400 rounded-lg mt-2 flex flex-col items-center justify-center"
    >
      <img className="w-[80%] mb-2 rounded-lg" src={img} alt="포트폴리오1" />
      <h2 className="text-sm text-center">{title}</h2>
    </div>
  );
}
