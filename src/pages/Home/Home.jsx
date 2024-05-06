import React from "react";
/* import Bubble from "../components/Bubble/Bubble"; */
import "./Home.css";
import Techstack from "../../components/Techstack/Techstack";

import { motion } from "framer-motion";

export default function Home({ title }) {
  return (
    <motion.div
      className="page"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <h1>{title}</h1>
      <section className="homeTextWrapper">
        <p className="homeText">
          Vad kul att du har hittat hit! <br /> <br />
          Mitt namn är Marina. Jag studerar till Frontendutvecklare och tar
          examen 2025. Nedan kan du se vilka tekniker jag har lärt mig såhär
          långt i utbildningen. <br /> <br />
          Klicka dig vidare till Mina Projekt för att se hur jag applicerat
          dessa kunskaper praktiskt i olika projekt.
        </p>
      </section>
      <div>
        <Techstack />
      </div>
      {/*       <div className="bubbleContainer">
        <Bubble />
      </div> */}
    </motion.div>
  );
}
