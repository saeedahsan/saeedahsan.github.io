import Navbar from "../../components/Navbar";

function Projects() {
  return <>
  <Navbar currentLocation="/projects" />
    <div className="px-4">
      <h1 className="text-3xl font-bold">Projects</h1>
      <h2 className="text-2xl font-bold pb-1 pt-4">Restify</h2>
      <li>Worked in a team to develop a full stack Airbnb replica website using Django for the backend and React for the frontend</li>
      <li>Designed and implemented a RESTful API using the Django REST Framework for efficient communication between the frontend and backend</li>
      <li>Developed interactive user interfaces and implemented responsive design principles using React to enhance the user experience and improve website usability</li>
      <h2 className="text-2xl font-bold pb-1 pt-4">Sayyara</h2>
      <li>Worked as a software developer on a progressive web app using React, TailwindCSS and Spring, which resulted in the creation of several pages of the application with a user-friendly interface and a maintainable and extendable backend</li>
      <li>As a member of the frontend development team, collaborated with other team members to design UI mockups, resulting in better UI design throughout the application</li>
      <li>Worked with the backend development team to design the API for frontend-backend communication, which simplified and organized the development process</li>
      <h2 className="text-2xl font-bold pb-1 pt-4">GroceryApp</h2>
      <li>Worked in a team to design an e-commerce application using Android Studio by following the Agile Scrum framework for software development</li>
      <li>Made use of a Firebase Realtime Database to keep track of accounts, stores, products and other user information, which allowed for quick, real-time data storage so different users could communicate effectively</li>
      <li>Performed both unit and integration testing for several modules which, combined with the entire team’s tests, resulted in a test suite which minimized any bugs or errors in the application</li>
    </div>
  </>
};

export default Projects;