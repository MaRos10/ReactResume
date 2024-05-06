import React, { useState, useEffect } from "react";

export function FetchData() {
  const URL = "https://api.github.com/users/MaRos10/repos";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <section>
      <h2 className="projectSubtitle">
        Ta gärna en titt på mina GitHub - projekt
      </h2>
      <article className="projectList">
        {data.map((repo) => (
          <article className="project" key={repo.id}>
            <a href={repo.html_url}>
              <h3>{repo.name}</h3>
            </a>
          </article>
        ))}
      </article>
    </section>
  );
}
