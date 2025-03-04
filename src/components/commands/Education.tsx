import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BCA (Bachelor of computer applications)",
    desc: "Indira Gandhi University | 2020",
  },
  {
    title: "Diploma in Mechatronics and smartfactory engineering",
    desc: "(NTTF) Nettur technical training foundation Banglore | 2019",
  },
  {
    title: "Higher Secondary (12th)",
    desc: "Govt Hss Kuttamassery | 2017",
  },
  {
    title: "SSLC (10th)",
    desc: "Vijnanapeedom English Medium High School | 2015",
  },
];

export default Education;
