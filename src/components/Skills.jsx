export default function Skills() {
  return (
    <div className="pt-5 pl-4 pr-4">
      <h1 className="font-bold text-4xl mb-2">Skills</h1>
      <div className="bg-gray-400 p-4 rounded-lg flex flex-col">
        <div className="flex justify-between">
          <h2 className="font-bold text-lg">Frontend</h2>
          <h2 className="font-bold text-lg">Backend</h2>
          <h2 className="font-bold text-lg">Database</h2>
        </div>
        <ul className="flex text-sm leading-7">
          <li>React</li>
          <li>Next.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Typescript</li>
        </ul>
      </div>
    </div>
  );
}
