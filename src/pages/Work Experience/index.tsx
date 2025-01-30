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
        Built a blockchain-based payment widget, reducing render times by 34%
        with SSR and memoization
      </li>
      <li>
        Developed a backend in NestJS and PostgreSQL, supporting 250,000+ users
        and 35,000 daily concurrent users
      </li>
      <li>
        Integrated Stripe and NFT blockchain payments, processing $13,000+ in
        daily transactions
      </li>
      <li>
        Improved software reliability by boosting test coverage to 98%,
        implementing distributed logging, and setting up CI/CD with Docker
      </li>
      <li>
        Mentored 3 interns, reviewing 100+ PRs, teaching full-stack development
        concepts, and completing project 2 weeks ahead of schedule
      </li>
      <li>
        Presented final MVP to a large audience of stakeholders, showcasing and
        explaining key features and functionalities
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
        Contributed over 50 features to the web and mobile applications, greatly
        improving delivery timelines by weeks
      </li>
      <li>
        Managed Android and iOS deployments, deploying updates and features with
        100% uptime over 6 months
      </li>
      <li>
        Built an automated testing platform in Java, running daily tests on
        50,000+ lines of code, ensuring code quality
      </li>
      <li>
        Developed a feature to automate shipment tracking and document
        generation, saving 10+ hours of work weekly
      </li>
      <li>
        Automated invoice retrieval by integrating with Gmail API to fetch
        invoices, which improved efficiency by 25%
      </li>
      <li>
        Led enhancements to eBay Marketplace integration by adding key features,
        increasing efficiency by 30%
      </li>
      <li>
        Enhanced the Flutter mobile app with new pages and features, server
        error handling, and alerts
      </li>
    </div>
  );
}

export default WorkExperience;
