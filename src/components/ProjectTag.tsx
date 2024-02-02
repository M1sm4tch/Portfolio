import React from "react";

interface ProjectTagprops {
    name: string
    onClick: any
    isSelected: boolean
}
const ProjectTag = ({ name, onClick, isSelected }: ProjectTagprops) => {
  const buttonStyles = isSelected
    ? "text-white border-[#348F50]"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;