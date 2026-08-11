import LandingPage from "./LandingPage.tsx";
import AboutMe from "./AboutMe.tsx";
import TechnicalSkills from "./TechnicalSkills.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";

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