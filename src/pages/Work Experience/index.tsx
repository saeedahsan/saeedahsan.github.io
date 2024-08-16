function WorkExperience() {
  return (
    <div className="px-4 h-screen flex flex-col justify-center">
      <h1 className="text-3xl font-bold">Work Experience</h1>
      <h2 className="text-2xl font-bold pb-1 pt-4">
        {"Full-Stack Software Developer - "}
        <a
          href="https://www.northernlabs.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1976d2]"
        >
          Northern Labs
        </a>
      </h2>
      <li>
        Developed and implemented frontend components in React based on Figma
        designs, enhancing user interface and experience for a blockchain-based
        payment widget
      </li>
      <li>
        Engineered backend systems using NestJS and PostgreSQL, including user
        and publisher account management, integration with Stripe, and
        transaction processing for NFT minting and blockchain integration
      </li>
      <li>
        Established unit testing and logging for backend services, ensuring code
        reliability and robustness, and utilized Docker for streamlined
        development and deployment processes
      </li>
      <li>
        Mentored and guided other interns, assisting them with daily tasks and
        fostering their development in full stack technologies and best
        practices
      </li>
      <h2 className="text-2xl font-bold pb-1 pt-4">
        {"Full-Stack Software Developer - "}
        <a
          href="https://www.exponet.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1976d2]"
        >
          Exponet Canada Inc.
        </a>
      </h2>
      <li>
        Worked as a full stack developer on the company’s web and mobile
        applications using React, Grails and Flutter, resulting in the addition
        of numerous features on both platforms which greatly aided the company’s
        day-to-day operations
      </li>
      <li>
        As the mobile deployment manager, thoroughly tested and deployed new
        updates to both Android and iOS platforms, resulting in seamless and
        bug-free updates which greatly benefited the employees using the app
      </li>
      <li>
        Reviewed and executed quality assurance testing on other developers’
        code, which helped to maintain code quality and ensured that the live
        application was functional and bug-free
      </li>
    </div>
  );
}

export default WorkExperience;
