const skills = [
    { name: "JavaScript", icon: "/images/javascript.png" },
    { name: "React", icon: "/images/reactjs.png" },
    { name: "Node.js", icon: "/images/nodejs.png" },
    { name: "HTML", icon: "/images/html.png" },
    { name: "CSS", icon: "/images/css.png" },
  ];
  
  function Skills() {
    return (
      <section id="skills" className="bg-black text-white py-12 px-4 text-center">
        <h2 className="text-sm tracking-widest uppercase text-gray-400 mb-8">
          Experience With
        </h2>
        <div className="flex justify-center items-center flex-wrap">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 grayscale hover:grayscale-0 transition duration-300 px-4"
            />
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;