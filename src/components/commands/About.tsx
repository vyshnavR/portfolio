import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Vyshnav R</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Python Django developer</HighlightAlt> based in Ernakulam,
        Kerala.
      </p>
      <p>
        I am passionate about building robust and scalable backend systems and <br />
        crafting efficient APIs.
      </p>
    </AboutWrapper>
  );
};

export default About;
