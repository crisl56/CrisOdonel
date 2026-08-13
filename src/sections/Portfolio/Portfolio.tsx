import LandingPage from "./LandingPage/LandingPage.tsx";
import AboutMe from "./AboutMe/AboutMe.tsx";
import TechnicalSkills from "./TechnicalSkills/TechnicalSkills.tsx";
import Projects from "./Projects/Projects.tsx";
import Contact from "./Contact/Contact.tsx";

export default function Portfolio(){
    return (
        <>
            <LandingPage/>
            <AboutMe/>
            <TechnicalSkills/>
            <Projects/>
            <Contact/>
        </>
    )
}