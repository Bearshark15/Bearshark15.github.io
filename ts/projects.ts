import { Project } from "./types";

const Projects: Project[] = [
    {
        key: 1,
        title: "Ball Bash",
        shortDescription: "Race against time to destroy the balls.",
        description: "",
        pageLink: "/projects/ballbash",
        thumbnail: "/ballbash/hero_capsule.jpg",
        images: [""],
        team: [],
    },
    {
        key: 2,
        title: "OverStay",
        shortDescription: "3D puzzle game.",
        description: "",
        pageLink: "/projects/overstay",
        thumbnail: "/overstay/OverStay.png",
        images: [""],
        team: [],
    },
    {
        key: 3,
        title: "R:EON",
        shortDescription: "First person platforming game.",
        description: "",
        pageLink: "projects/reon",
        thumbnail: "/reon/SS4.png",
        images: [""],
        team: [],
    },
    {
        key: 4,
        title: "Potato Reaper",
        shortDescription: "Arcade shooter game.",
        description: "",
        pageLink: "projects/potatoreaper",
        thumbnail: "/potatoreaper/PotatoReaper.jpg",
        images: [""],
        team: [
            {
                key: 1,
                name: "Faruk",
                role: "Project Manager",
                image: "",
                fallback: "F",
            },
            {
                key: 2,
                name: "Andre",
                role: "Designer",
                image: "",
                fallback: "A",
            },
            {
                key: 3,
                name: "Dani",
                role: "Programmer",
                image: "",
                fallback: "D",
            },
            {
                key: 4,
                name: "Jacob Bekele Jansson",
                role: "Programmer",
                image: "",
                fallback: "F",
            },
            {
                key: 4,
                name: "Iver",
                role: "Artist",
                image: "",
                fallback: "F",
            },
        ],
    },
    {
        key: 5,
        title: "Undelivered",
        shortDescription: "Zombie survival game demo.",
        description: "",
        pageLink: "projects/undelivered",
        thumbnail: "/undelivered/Undelivered.png",
        images: [""],
        team: [],
    },
    {
        key: 6,
        title: "Bhor",
        shortDescription: "2D Shoot 'em up game.",
        description: "",
        pageLink: "projects/bhor",
        thumbnail: "/bhor/bhor.png",
        images: [""],
        team: [],
    },
];

export default Projects;