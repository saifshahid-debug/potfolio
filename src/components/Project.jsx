// import React from "react";
import HTML from "../../public/html.png";
import Tailwind from "../../public/tailwind.png";
import mongoDB from "../../public/mongo.png";
import Reactjs from "../../public/rect.jpeg";
import nodejs from "../../public/node.png";
import javascript from "../../public/js.png";
function Project() {
  const cardItem = [
    {
      id: 1,
      logo: HTML,
      name: "HTML",
      description: "HTML is the standard language for creating web pages. i structure",
    },
    {
      id: 2,
      logo: Tailwind,
      name: "tailwind",
      description: "Tailwind CSS is a utility-first CSS framework for creating custom designs.",
    },
    {
      id: 3,
      logo: javascript,
      name: "javascript",
      description: " powers dynamic web experiences. implement logics",
    },
    {
      id: 4,
      logo: Reactjs,
      name: "reactJS",
      description: "React is a JavaScript library for building user interfaces.",
    },
    
    {
      id: 5,
      logo: mongoDB,
      name: "mongoDB",
      description: "MongoDB is a NoSQL database used for high-volume data storage.",
    },
    {
        id: 6,
        logo: nodejs,
        name: "nodejs",
        description: "Node.js is a JavaScript runtime built on Chrome's V8 engine for building server-side applications.working",
      },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio:</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                {description}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;