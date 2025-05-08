const experiences = [
  {
    company: "Standard Chartered Bank Singapore",
    logo: "/images/scb.png",
    roles: [
      {
        title: "Analyst, Product Management (Work Study Programme)",
        duration: "May 2022 – Aug 2022",
        icon: "/images/scb.png",
        points: [
          "Managed and monitored an alerts dashboard to ensure timely responses to critical production issues.",
          "Customized alert thresholds, improving monitoring accuracy and reducing false positives.",
        ],
      },
      {
        title: "Analyst, Product Management (Work Study Programme)",
        duration: "May 2023 – Aug 2023",
        icon: "/images/scb.png",
        points: [
          "Configured Amelia AI chatbot for internal FAQs, reducing repetitive queries and streamlining access to DevFactory resources.",
          "Participated in agile stand-ups; provided technical support for over 10 internal applications.",
          "Consolidated documentation and improved user self-help efficiency.",
        ],
      },
      {
        title: "Analyst, DevOps (Work Study Programme)",
        duration: "Jan 2024 – Dec 2024",
        icon: "/images/scb.png",
        points: [
          "Built an internal customer management system using React (Lit framework), enabling efficient record operations (search, create, update, delete) across departments.",
          "Collaborated with backend teams to integrate APIs; tested endpoints with Postman to ensure functionality and performance.",
          "Led the migration of 30+ applications to Azure DevOps, managing timelines, dependencies, and cross-team coordination.",
          "Enhanced the Amelia AI chatbot with updated FAQs to improve internal documentation accessibility.",
        ],
      },
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-zinc-900 rounded-lg p-6 shadow-md">
            {/* Roles */}
            {exp.roles.map((role, j) => (
              <div key={j} className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 items-start mb-1">
                  <div className="flex items-center gap-2">
                    <img
                      src={role.icon}
                      alt="role icon"
                      className="w-5 h-5 object-contain"
                    />
                    <p className="font-semibold text-white">{role.title}</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {role.duration}
                  </span>
                </div>
                <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1">
                  {role.points.map((point, k) => (
                    <li key={k}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;