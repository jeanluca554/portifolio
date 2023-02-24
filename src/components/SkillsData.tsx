type SkillsDataProps = {
  skillName: string;
  skillNumber: string;
}

const SkillsData = (props: SkillsDataProps) => {
  return (
    <div className="skills__data mb-6">
      <div className="skills__titles flex justify-between mb-2 font-medium">
        <h3 className="skills__name text-gray-800">{props.skillName}</h3>
        <span className="skills__number text-gray-500">{props.skillNumber}</span>
      </div>
      <div className="skill__bar h-1 rounded-md bg-gray-300">
        {/* <span className={`skills__percentage h-1 rounded-md block bg-first-color skills__html w-[60%]`}></span> */}
        <span className={`skills__percentage h-1 rounded-md block bg-first-color skills__html w-[${props.skillNumber}]`}></span>
      </div>
    </div>
  )

}

export default SkillsData;