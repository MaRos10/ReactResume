import "./Home.scss";
import Techstack from "../../components/Techstack/Techstack";
import PageTransition from "../../components/PageTransition";

export default function Home({ title }) {
  return (
    <PageTransition>
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
      <section>
        <Techstack />
      </section>
    </PageTransition>
  );
}
