import "./my.css";

const About = () => {
  return (
    <div id="About">
      <div className="prof  patterns">
      <div className="myProj">
        <img className="pic" src="./images/pic1.png"></img>
      </div>
        <div className="abt">
          <header className="about text-2xl font-bold pt-10">
            <h2>ABOUT ME</h2>
            <br></br>
          </header>
          
          <p>
          A dedicated Full Stack Web developer with a
          specialized skill set that enables me to build
          robust web applications. I am adept in both
          front-end and back-end and have an eye for
          performance and accuracy.
          </p>
      
          <p> I am adaptable, proficient in remote collaboration,
          and committed to achieving organizational goals.
          With a knack for problem-solving and analytics, I am
          passionate about solving Algorithmic problems with a
          good hold on Data Structures.</p>
        </div>{" "}
        
      </div>
    </div>
  );
};
export default About;
