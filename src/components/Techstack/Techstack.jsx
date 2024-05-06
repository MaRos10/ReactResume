import "./Techstack.css";

export default function Techstack() {
  return (
    <section className="techstack">
      <h1 className="techstackHeader">Techstack</h1>

      <section className="techstackTagWrapper">
        <article className="buttonTag">
          <article className="buttonInfo">
            <img
              className="techstackIcon"
              src="src/assets/html.svg"
              alt="Html logo"
            />
            <p className="techText">HTML</p>
          </article>
        </article>

        <article className="buttonTag">
          <article className="buttonInfo">
            <img
              className="techstackIcon"
              src="src/assets/css.svg"
              alt="Css logo"
            />
            <p className="techText">CSS</p>
          </article>
        </article>

        <article className="buttonTag">
          <article className="buttonInfo">
            <img
              className="techstackIcon"
              src="src/assets/javascript.svg"
              alt="Javascript logo"
            />
            <p className="techText">JavaScript</p>
          </article>
        </article>

        <article className="buttonTag">
          <article className="buttonInfo">
            <img
              className="techstackIcon"
              src="src/assets/react.svg"
              alt="React logo"
            />
            <p className="techText">React</p>
          </article>
        </article>

        <article className="buttonTag">
          <article className="buttonInfo">
            <img
              className="techstackIcon"
              src="src/assets/figma.svg"
              alt="Figma logo"
            />
            <p className="techText">Figma</p>
          </article>
        </article>

        <article className="buttonTag">
          <article className="buttonInfo">
            <img
              className="techstackIcon"
              src="src/assets/git.svg"
              alt="Git logo"
            />
            <p className="techText">Git</p>
          </article>
        </article>
      </section>
    </section>
  );
}
