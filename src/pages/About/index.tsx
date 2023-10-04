import Navbar from "../../components/Navbar";

function About() {
  return <>
  <Navbar currentLocation="/about" />
    <div>
      <h1 className="text-3xl font-bold">About</h1>
      <p>I'm currently a third-year student studying at the University of Toronto, where I'm majoring in computer science with a focus in software engineering.</p>
    </div>
  </>
};

export default About;