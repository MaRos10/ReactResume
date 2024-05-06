import { FetchData } from "../../components/FetchData";
import "./MyProjects.css";
import PageTransition from "../../components/PageTransition";

export default function MyProjects({ title }) {
  return (
    <PageTransition>
      <h1>{title}</h1>
      <FetchData />
    </PageTransition>
  );
}
