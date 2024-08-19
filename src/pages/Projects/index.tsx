function Projects() {
  return (
    <div className="px-4 h-screen flex flex-col justify-center">
      <h1 className="text-3xl font-bold">Projects</h1>
      <h2 className="text-2xl font-bold pb-1 pt-4">
        <a
          href="https://github.com/langchain-ai/langchainjs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1976d2]"
        >
          LangChain{" "}
        </a>
      </h2>
      <li>
        Contributed large-scale feature to LangChain, a framework for developing
        applications powered by LLM’s with more than 5 million downloads and
        powering over 50,000 applications
      </li>
      <li>
        Implemented email toolkit to facilitate AI generated emails powered by
        LLMs, integrating with the Gmail API
      </li>
      <h2 className="text-2xl font-bold pb-1 pt-4">
        <a
          href="https://github.com/saeedahsan/Restify"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1976d2]"
        >
          Restify{" "}
        </a>
      </h2>
      <li>
        Worked in a team to develop a full stack Airbnb replica website using
        Django for the backend and React for the frontend
      </li>
      <li>
        Designed and implemented a RESTful API using the Django REST Framework
        for efficient communication between the frontend and backend
      </li>
      <li>
        Developed interactive user interfaces and implemented responsive design
        principles using React to enhance the user experience and improve
        website usability
      </li>
      <h2 className="text-2xl font-bold pb-1 pt-4">
        <a
          href="https://github.com/saeedahsan/Sayyara"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1976d2]"
        >
          Sayyara{" "}
        </a>
      </h2>
      <li>
        Worked as a software developer on a progressive web app using React,
        TailwindCSS and Spring, which resulted in the creation of several pages
        of the application with a user-friendly interface and a maintainable and
        extendable backend
      </li>
      <li>
        As a member of the frontend development team, collaborated with other
        team members to design UI mockups, resulting in better UI design
        throughout the application
      </li>
      <li>
        Worked with the backend development team to design the API for
        frontend-backend communication, which simplified and organized the
        development process
      </li>
    </div>
  );
}

export default Projects;
