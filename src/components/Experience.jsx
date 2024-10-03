
import HTML from "../../public/html.png";
import Tailwind from "../../public/tailwind.png";
import mongoDB from "../../public/mongo.png";
import Reactjs from "../../public/rect.jpeg";
import nodejs from "../../public/node.png";
import javascript from "../../public/js.png";
import oracle from "../../public/oracle.png"
import awss from "../../public/awss.png"


function Experience() {
  const experiencedTechnologies = [
    {
      id: 1,
      logo: HTML,
      name: "HTML",
    },
    {
      id: 2,
      logo: Tailwind,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: Reactjs,
      name: "ReactJS",
    },
    {
      id: 5,
      logo: oracle,
      name: "dbms",
    },

  ];

  const freshTechnologies = [
    {
      id: 6,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 7,
      logo: awss,
      name: "AWS",
    },
    {
      id: 8,
      logo: nodejs,
      name: "Node.js",
    },
    
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        
        <h1 className="text-3xl font-bold mb-5">Experience:</h1>
        <p>
          I have 6 months of experience in the following technologies:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
          {experiencedTechnologies.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div className="">{name}</div>
            </div>
          ))}
        </div>

        
        <p className="mt-5">
  Additionally, I am learning and gaining hands-on experience with these technologies:
</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 my-3">
  {freshTechnologies.map(({ id, logo, name }) => (
    <div
      className="flex flex-col items-center justify-center border-[2px] rounded-full w-[150px] h-[150px] lg:w-[180px] lg:h-[180px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
      key={id}
    >
      <img src={logo} className="w-[80px] lg:w-[100px] rounded-full" alt={name} />
      <div className="mt-2 text-center">{name}</div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
  <hr />
}

export default Experience;
