import LandingPage from "./LandingPage/LandingPage.tsx";
import AboutMe from "./AboutMe/AboutMe.tsx";
import SkillsPrograms from "./SkillsPrograms/SkillsPrograms.tsx";
import Projects from "./Projects/Projects.tsx";
import Contact from "./Contact/Contact.tsx";

export default function Portfolio(){
    return (
        <>
            <LandingPage/>
            <AboutMe/>
            <SkillsPrograms/>
            <Projects/>
            <Contact/>
        </>
    )
}