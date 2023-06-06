import React from "react";

function MainSection() {
  return (
    <>
    <div className="Mainsection">
      <div className="Main grow">
        <div className="title">
          <h1>Nithyadevi Chandrasekaran</h1>
          <p>Front end Developer with Manual testing experience</p>
          <a
            href={".../assets/CV_ChandrasekaranNithyadevi.pdf"}
            target="_blank"
          >
            <button>My CV</button>
          </a>
        </div>
      </div>

        <div className="skillpara">
          <h3>Skill Set</h3>
          <p>HTML</p>
          <div className="container">
          <div className="skills html">90%</div>
          </div>

          <p>CSS</p>
          <div className="container">
            <div className="skills css">80%</div>
          </div>

          <p>JavaScript</p>
          <div className="container">
            <div className="skills js">75%</div>
          </div>

          <p>React</p>
          <div className="container">
            <div className="skills React">70%</div>
          </div> 
        </div>
        </div>
    </>
  );
}

export default MainSection;
