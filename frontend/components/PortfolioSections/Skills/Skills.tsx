
import SkillsSwiper from "./Swiper/SkillsSwiper"


interface SkillsProps {
    hrefId?: string
}

const Skills: React.FC<SkillsProps> = (props) => {
      return (
        <section id={props.hrefId} className="pt-[7rem] pb-[2rem] min-h-screen justify-center">
            <div className="mx-auto max-w-5xl md:max-w-[768px] pl-8 pr-8">
            <p className="text-7xl font-light mb-[2rem] mt-[2rem] ml-[2rem] text-center">My Skills</p>
                <SkillsSwiper/>
            </div>
        </section>
      );
}

export default Skills;