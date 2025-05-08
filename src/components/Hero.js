


function Hero() {
    return (
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-purple-800 via-black to-black pt-24 px-4 text-center">
        <img src="/images/Profile_picture.jpg"alt="profilePic" 
        
          className="w-32 h-32 rounded-full mb-6 border-4 border-purple-400"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          I do <span className="text-purple-400">code</span> and make content about it!
        </h1>
        <p className="text-gray-300 mb-6 max-w-xl">
        Hi, I’m Jian Wei — a recent Software Engineering graduate with 1.5 years of hands-on experience building full-stack applications and AI-powered chatbots.
        I’ve worked with technologies like JavaScript, Python, Node.js, and React, and applied NLP and machine learning in my final year project.
        I’m passionate about building scalable systems that streamline workflows, and I’m eager to contribute to meaningful software while growing as a developer.
        </p>
        <div className="flex space-x-4">
          <a href="#contact" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded text-white">
            Get in Touch
          </a>
          <a href="/resume/JianWei_resume.pdf" download className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black rounded text-white">
            Download CV
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;