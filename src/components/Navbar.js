function Navbar() {
    return (
      <nav className="fixed w-full top-0 left-0 bg-black text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">Jian Wei</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-purple-400">Home</a></li>
            <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
            <li><a href="#experience" className="hover:text-purple-400">Experience</a></li>
            <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;