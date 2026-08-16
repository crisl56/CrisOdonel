export interface CaseStudySection{
    /** short label above paragraph*/
    heading: string;
    /** One entry per paragraph in the case study. */
    body: string[];
}

export interface PublishedLink {
    /** What people see, "Steam", "Itch.io" "Epic Games Store"*/
    label: string;
    url: string;
}

export interface Project {
    id: string;
    name: string;
    role: string;
    description: string;
    duration: string;
    teamSize: string;
    tags: string[];
    /** First entry is the default thumbnail; the rest cycle in on hover. */
    thumbnails: string[];
    caseStudy: CaseStudySection[];
    screenshots: string[];
    /** Optional link to an externally hosted video (YouTube, Vimeo, etc). */
    videoUrl?: string;
    /** Optional link to a published store/itch/portfolio page. */
    publishedLink?: PublishedLink;
}

export const projects: Project[] = [
    {
        id: "tachyon",
        name: "Tachyon",
        role: "Gameplay & Network Engineer | 2026",
        tags: ["C++", "Unreal", "Multiplayer", "Gameplay Systems"],
        thumbnails: [
            "/CrisOdonel/caseStudies/tachyon/thumbnails/TachyonThumbnail.png",
            "/CrisOdonel/caseStudies/tachyon/thumbnails/Tachyon_Screenshot_01.png",
            "/CrisOdonel/caseStudies/tachyon/thumbnails/Tachyon_Screenshot_03.png",
        ],
        caseStudy: [
            {
                heading: "PROBLEM",
                body: [
                    "Clients had snappy movement and often rubber banded compared to the host of the game session. " +
                    "Instructors and playtesters all displayed frustration and displeasure from being a client. " +
                    "I found that this was caused by their location being different on each other's screens"
                ]
            },
            {
                heading: "DECISIONS",
                body: [
                        "I studied Unreal’s CMC networking system presentations, and Valve’s Networking forums online. " +
                        "I found that there are many systems dedicated to predicting and correcting positions while using techniques to keep bandwidth low. " +
                        "I tried to implement it for a while but ultimately got stuck and decided that " +
                        "I would have needed more time to properly create my own solution.",
                        "Due to the time limit, I decided to swap the architecture from a server authoritative based game into a client authoritative system. " +
                        "I had to give the vehicle different logic for when it wasn’t a vehicle being controlled locally to properly account for the new system.",
                    ]
            },
            {
                heading: "RESULTS",
                body: [
                    "Playtesters and instructors no longer noticed the lag for the movements of the game. " +
                    "Client movements were a lot more accurate and no longer rubberband. This created smoother movement, " +
                    "but left the door open for exploits and desyncs in other systems. In the future, I would use this system for small multiplayer games " +
                    "but I don’t think it would be good for larger/competitive multiplayer games."
                ]
            }
        ],
        screenshots: [
            "/CrisOdonel/caseStudies/tachyon/screenshots/Tachyon_Screenshot_01.png",
            "/CrisOdonel/caseStudies/tachyon/screenshots/Tachyon_Screenshot_02.png",
            "/CrisOdonel/caseStudies/tachyon/screenshots/Tachyon_Screenshot_03.png",
            "/CrisOdonel/caseStudies/tachyon/screenshots/Tachyon_Screenshot_04.png",
        ],
        videoUrl: "https://drive.google.com/file/d/1too7RWBQ4NP1K-c8wBlE7NBN8SdzEHJb/view?usp=sharing",
        description: "Tachyon is a 3D third-person free-for-all multiplayer vehicle combat game where 2-4 players battle inside a dynamic, " +
            "timed deathmatch arena set in a high-tech digital world. Piloting a versatile sci-fi hovercar capable of both surgical ranged precision and " +
            "devastating brute-force collisions. Here, survival means building breakneck speeds to seamlessly drift and maneuver through incoming fire. " +
            "Culminating in spectacular cinematic collisions as you hunt down rivals.",
        duration: "6 Months",
        teamSize: "6 People",
        publishedLink: {
            label: "Itch.io",
            url: "https://vfs-gdpg.itch.io/tachyon"

        }
    },
    {
        id: "gunch",
        name: "GUNCH",
        role: "Gameplay & UI Programmer | 2026",
        tags: ["C#", "Unity", "Gameplay Systems", "UI"],
        thumbnails: [
            "/CrisOdonel/caseStudies/gunch/thumbnails/GUNCHTitle.png",
        ],
        caseStudy: [],
        screenshots: [
            "/CrisOdonel/caseStudies/gunch/screenshots/gunchGameplay1.jpg",
            "/CrisOdonel/caseStudies/gunch/screenshots/GUNCHTitle.png",
        ],
        description: "GUNCH is a single-player 3D first-person shooter centered around a blend of melee and " +
            "ranged combat while going through room to room filled with enemies. You have an experimental Energy Siphoning " +
            "blade attached to your arm that builds your gun’s power gauge, allowing you to make one lethal piercing shot against enemies️. " +
            "Because of your newfound abilities, the authorities are after your life, wanting it for themselves. " +
            "Escape the city while using your abilities of GUNCHING to beat your enemies and save your life.",
        duration: "2 Months",
        teamSize: "5 People"
    },
    {
        id: "nekofish",
        name: "NekoFish",
        role: "PM | Gameplay & UI Programmer | 2025",
        tags: ["C#", "Unity", "Gameplay Systems", "UI"],
        thumbnails: [
            "/CrisOdonel/caseStudies/nekofish/thumbnails/NekoFishPoster.png",
            "/CrisOdonel/caseStudies/nekofish/thumbnails/Nekofishtitle.png",
            "/CrisOdonel/caseStudies/nekofish/thumbnails/NekoFishgameplay2.png",
        ],
        caseStudy: [],
        screenshots: [
            "/CrisOdonel/caseStudies/nekofish/screenshots/Nekofishtitle.png",
            "/CrisOdonel/caseStudies/nekofish/screenshots/NekoFishGameplay.png",
            "/CrisOdonel/caseStudies/nekofish/screenshots/NekoFishGameplay2.png",
            "/CrisOdonel/caseStudies/nekofish/screenshots/NekoFishGameplay3.png",
            "/CrisOdonel/caseStudies/nekofish/screenshots/NekoFishGameplay4.png",
        ],
        description: "NekoFish is a 3D Unity fishing game where you play as a humanoid cat catching and discovering fish on an island. " +
            "Acquire different rarities and experience many environments during your hunt. Interact and help various NPCs on the island for rewards and story. " +
            "Find and catch the rarest fish of them all, the NekoFish!",
        duration: "6 Months",
        teamSize: "5 People"
    }
]