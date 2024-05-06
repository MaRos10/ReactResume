import React from "react";
import { FetchData } from "../../components/FetchData";
import "./MyProjects.css";

export default function MyProjects({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <FetchData />
    </>
  );
}
