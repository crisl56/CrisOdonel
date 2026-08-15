import {useEffect, useRef, useState} from "react";
import styles from "./AboutMe.module.css";

const aboutImages = [
    "/CrisOdonel/about/me1.jpg",
    "/CrisOdonel/about/me2.jpg",
    "/CrisOdonel/about/me3.jpg",
    "/CrisOdonel/about/me4.jpg",
]

export default function AboutMe(){
    const [imageIndex, setImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
       const node = sectionRef.current;
       if(!node) return;

       const observer = new IntersectionObserver(
           ([entry]) => {
               if (entry.isIntersecting) {
                   setIsVisible(true);
                   observer.unobserve(node);
               }
           },
           { threshold: 0.2 }
       );

       observer.observe(node);
       return () => observer.disconnect();
    }, []);

    const handleImageHover = () => {
        if(aboutImages.length <= 1) return;
        setImageIndex((prev) => {
            let next = Math.floor(Math.random() * aboutImages.length);
            while (next === prev){
                next = Math.floor(Math.random() * aboutImages.length);
            }
            return next;
        });
    };

    return(
        <section
            id="about"
            ref={sectionRef}
            className={`${styles.about} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.imageWrap} onMouseEnter={handleImageHover}>
                {aboutImages.map((src, i) => (
                    <div
                        key={src}
                        className={`${styles.photoTile} ${i === imageIndex ? styles.photoActive : ''}`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
            </div>

            <div className={styles.content}>
                <h1 className={styles.heading}>About Me!</h1>
                <h2 className={styles.name}>Cris Laurence Odonel</h2>

                <div className={styles.textBlock}>
                    <p>I create gameplay systems in Unity and Unreal, specializing in player interactions and experience.</p>
                    <p>Seeing a final product fully polished and shipped is the most satisfying feeling for me.</p>
                    <p>I am currently working on a Multiplayer Vehicle Arena Shooter game in Unreal Engine 5 using C++.</p>
                    <p>In the project, I developed and architected the current movement system and networked movement supporting up to four players inside the project.</p>

                    <br />

                    <p>I am graduating from VFS Programming in August 2026!</p>
                    <p>I am actively searching for junior gameplay positions in indie or mid-size game studios in Vancouver and Winnipeg.</p>
                    <p>I am open to work remotely online.</p>
                </div>
            </div>
        </section>
    )
}