import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'aos/dist/aos.css';

const skillsLeft = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 100 },
  { name: 'JavaScript', value: 100 },
  {name: 'Next JS', value : 80},
  {name: 'Bootstrap', value : 90},
  {name:'MySql',value:100}
];
const sortedSkills1 = [...skillsLeft].sort((a, b) => b.value - a.value);

const skillsRight = [
  { name: 'PHP', value: 100 },
  { name: 'Node js', value: 90 },
  { name: 'Figma', value: 90 },
{name:'Laravel',value:75},
{name: 'Java', value : 90},
{name: 'SpringBoot', value : 60}
];
const sortedSkills2 = [...skillsRight].sort((a, b) => b.value - a.value);

const SkillBar = ({ name, value, animate }) => (
  <div className="progress">
    <span className="skill">
      <span>{name}</span> <i className="val">{value}%</i>
    </span>
    <div className="progress-bar-wrap">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: animate ? `${value}%` : '0%' }}
      ></div>
    </div>
  </div>
);

function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="skills" className="skills section light-background">
            <div className="section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>My soft skills are </p>
     
</div>
     
        <div className="row skills-content" ref={ref}>
          <div className="col-lg-6">
            {sortedSkills1.map(skill => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} animate={inView} />
            ))}
          </div>
          <div className="col-lg-6">
            {sortedSkills2.map(skill => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} animate={inView} />
            ))}
          </div>
        </div>
     
    </section>
  );
}

export default Skills;
