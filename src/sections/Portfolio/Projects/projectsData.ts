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
                heading: "PROBLEM 1",
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
        caseStudy: [
            {
                heading: "PROBLEM 1",
                body: [
                    "Playtesting revealed that players lacked sufficient feedback when taking damage or reaching critical health. " +
                    "This lack of communication led to abrupt, confusing deaths, causing players to feel the combat was unfair and resulting in " +
                    "high levels of frustration during encounters."
                ]
            },
            {
                heading: "DECISIONS",
                body: [
                    "I programmed a screen space red vignette that triggers and scales in intensity as the player's health drops. " +
                    "This provided an immediate, peripheral warning system that players noticed much faster than the traditional UI health bar.",
                    "I engineered a directional camera shake event triggered whenever the player takes damage from enemy AI. " +
                    "This added immediate, tactile feedback to enemy attacks, alerting players to hits even from behind so " +
                    "they could reposition accordingly."
                ]
            },
            {
                heading: "RESULTS",
                body: [
                    "The improved feedback loop significantly reduced player frustration. " +
                    "Playtesters reported that deaths felt fair and easily understandable, and they demonstrated better situational " +
                    "awareness and decision making when choosing to attack or heal. These technical additions provided the necessary " +
                    "polish to make the game's high stakes combat feel intuitive and responsive."
                ]
            }
        ],
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
        teamSize: "5 People",
        publishedLink:
            {
                label: "Itch.io",
                url: "https://fruitsaladsamurai.itch.io/gunch"
            }
    },
    {
        id: "nekofish",
        name: "NekoFish",
        role: "PM | Gameplay & UI Programmer | 2025",
        tags: ["C#", "Unity", "Gameplay Systems", "UI"],
        thumbnails: [
            "/CrisOdonel/caseStudies/nekofish/thumbnails/NekoFishPoster.png",
            "/CrisOdonel/caseStudies/nekofish/thumbnails/Nekofishtitle.png",
            "/CrisOdonel/caseStudies/nekofish/thumbnails/NekoFishGameplay2.png",
        ],
        caseStudy: [
            {
                heading: "PROBLEM 1",
                body: [
                    "Initial playtests revealed significant friction in the core gameplay loop. " +
                    "Players struggled to understand the input sequence required to equip their rods and cast. " +
                    "Additionally, the physics-based bobber frequently clipped into and became stuck in world geometry. " +
                    "This combination of onboarding friction and physics bugs resulted in high player confusion and" +
                    " prevented them from engaging with the primary mechanic.",
                ]
            },
            {
                heading: "DECISIONS",
                body: [
                    "I engineered a pre-tutorial scene to introduce the core inputs step by step, " +
                    "rewarding players for successfully executing micro-tasks. To reinforce this, I implemented dynamic " +
                    "UI text popups and custom animations to provide immediate, clear feedback when the fishing rod was" +
                    " successfully equipped.",
                    "To improve casting accuracy, I researched and applied kinematic physics formulas to calculate the" +
                    " exact arc of the cast, rendering a dynamic prediction projectile line. This visual aid allowed players " +
                    "to accurately target specific fish in the water.",
                    "I systematically audited the bobber's physics interactions and implemented a C# reset mechanic. " +
                    "By defining specific edge case parameters, the system automatically detects when a bobber is trapped " +
                    "in geometry and resets it, preventing softlocks and allowing players to immediately recast."
                ]
            },
            {
                heading: "RESULTS",
                body: [
                    "These implementations completely transformed the fishing experience. " +
                    "Players easily understood the mechanics and achieved a highly enjoyable " +
                    "\"flow state\" during gameplay. Frustration levels plummeted, physics related bugs were eliminated, " +
                    "and overall fishing success rates and engagement increased significantly."
                ]
            }
        ],
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
        teamSize: "5 People",
        videoUrl: "https://drive.google.com/file/d/1BLPOv7DABll4U_DE26oof-76gy-WklwE/view?usp=sharing",
        publishedLink:
            {
                label: "Itch.io",
                url: "https://fruitsaladsamurai.itch.io/nekofish"
            }
    }
]