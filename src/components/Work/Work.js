import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <div className="work-component" id="work">
      <div className="work-header-text">Work</div>
      <br />
      <div className="work-desc-text">Hand-picked projects</div>
      <div className="work-desc-text">for you to see.</div>
      <div className="project-component">
        <div className="project-card">
          <div className="project-title">Crio News Feed</div>
          <div className="project-desc">
            A dynamic news feed website that features the latest news for select
            topics, from Flipboard
          </div>
          <a
            href="https://xboard-by-sreejan.netlify.app/"
            className="project-link"
          >
            View it live here
          </a>
        </div>
        <div className="project-card">
          <div className="project-title">QTrip</div>
          <div className="project-desc">
            A dynamic travel website that can be used to browse adventures and
            make reservations.
          </div>
          <a
            href="https://qtrip-dynamic-frontend-sreejan.netlify.app/"
            className="project-link"
          >
            View it live here
          </a>
        </div>
        <div className="project-card">
          <div className="project-title">QKart</div>
          <div className="project-desc">
            An E-commerce application offering a variety of products for
            customers to choose from.
          </div>
          <a
            href="https://qkart-frontend-by-sreejan.netlify.app/"
            className="project-link"
          >
            View it live here
          </a>
        </div>
      </div>
    </div>
  );
}
