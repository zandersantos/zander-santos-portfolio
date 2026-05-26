const Header = () => {
  return (
    <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4 p-3 sm:p-4">
      <a href="#about" className="btn-primary">About</a>
      <a href="#experience" className="btn-primary">Experience</a>
      <a href="#education" className="btn-primary">Education</a>
      <a href="#projects" className="btn-primary">Projects</a>
    </nav>
  )
}

export default Header;