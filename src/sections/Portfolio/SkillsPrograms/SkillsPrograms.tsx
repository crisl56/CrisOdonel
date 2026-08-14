import type {IconType} from "react-icons";

import {
    SiCplusplus, SiSharp, SiJavascript, SiTypescript, SiReact, SiGit,
    SiUnity, SiUnrealengine, SiGithub, SiRider
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

interface Skill {
    name: string;
    icon: IconType;
}

const skills: Skill[] = [
    { name: "C++", icon: SiCplusplus},
    { name: "C#", icon: SiSharp},
    { name: "JavaScript", icon: SiJavascript},
    { name: "TypeScript", icon: SiTypescript},
    { name: "React", icon: SiReact},
    { name: "Git", icon: SiGit}
]

const programs: Skill[] = [
    { name: "Unreal", icon: SiUnrealengine},
    { name: "Unity", icon: SiUnity},
    { name: "GitHub", icon: SiGithub},
    { name: "Rider", icon: SiRider},
    { name: "VS Code", icon: VscVscode}
]

export default function SkillsPrograms() {

    return(
        <>
            <h1>Skills & Programs</h1>

            <section>
                <h2>Skills</h2>
                <div>
                    {skills.map((Skill) => (
                        <div key={Skill.name}>
                            <Skill.icon size={40}/>
                            <p>{Skill.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>Programs</h2>
                <div>
                    {programs.map((Skill) => (
                        <div key={Skill.name}>
                            <Skill.icon size={40}/>
                            <p>{Skill.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}