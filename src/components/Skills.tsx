import { CaretDown } from "phosphor-react";

type SkillsProps = {
  skillTitle: string;
  skillSubtitle: string;
  icon: any;
  skillsData: any;
  isOpen: boolean;

}

const Skills = (props: SkillsProps) => {
  return (
    <div className={`skills__content `}>
      <div className="skills__header flex items-center mb-10 cursor-pointer">
        {props.icon}
        <div>
          <h1 className="skills__title text-lg font-semibold text-gray-800">{props.skillTitle}</h1>
          <span className="skills__subtitle text-sm text-gray-400">{props.skillSubtitle}</span>
        </div>

        <CaretDown className={`skills__arrow text-2xl text-first-color ml-auto duration-[400ms] ${props.isOpen ? "rotate-180" : ""}`} weight="bold" />
      </div>

      <div className={`skills__list grid ${props.isOpen ? "h-max mb-10" : "hidden h-0"} `}>
        {props.skillsData}
      </div>
    </div>
  )

}

export default Skills;