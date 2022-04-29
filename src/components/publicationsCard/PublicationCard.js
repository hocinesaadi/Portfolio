import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./PublicationCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
