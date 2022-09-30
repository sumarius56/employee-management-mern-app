import React from "react";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import AddClientModal from "../components/AddClientModal";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;