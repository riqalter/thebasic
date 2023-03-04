import { Resume, Work } from "../schemas/resume";

const work: Work[] = [
  {
    id: "0",
    name: "Animeriq V1",
    description:
      "Anime website for people who love anime. I built this website with ReactJS and Axios for search webscraper",
    gitrepo: new URL("https://gitlab.com/riq666/frontend-animeriq"),
    url: new URL("https://anime.mikailthoriq.eu.org"),
    startDate: new Date("February 2021"),
  },
  {
    id: "1",
    name: "Lab",
    description:
      "Riq's old web Lab is a collection of different project like php or else.",
    url: new URL("https://lab.riq.my.id/"),
    startDate: new Date("June 2020"),
  },
  {
    id: "2",
    name: "OSINT | Riq mirror",
    description:
      "framework focused on gathering information from free tools or resources.",
    url: new URL("https://osint.mikailthoriq.eu.org/"),
    startDate: new Date("August 2021"),
  },
  {
    id: "3",
    name: "weather-webapp",
    description:
      "A weather app that shows the weather in your location. It uses OpenWeatherMap API.",
    gitrepo: new URL("https://github.com/thq642/weather-webapp"),
    url: new URL("https://weather.mikailthoriq.eu.org/"),
    startDate: new Date("November 2021"),
  },
  {
    id: "4",
    name: "image-condom",
    description:
      "A simple image compression and resizing tool using the Sharp JavaScript library to perform operations such as compression, resizing, and on-the-fly processing of images.",
    gitrepo: new URL("https://github.com/thq642/image-condom"),
    url: new URL("https://imgproxy1.riqexpe.eu.org/?url="),
    startDate: new Date("January 2023"),
  },
  {
    id: "5",
    name: "makhluk-windows10",
    description: "Windows 10 clone with Reactjs",
    gitrepo: new URL("https://github.com/riqalter/makhluk-windows10"),
    startDate: new Date("December 2021"),
  },
];

export const data: Resume = {
  basics: {
    name: "Mikail Thoriq Kariemshah Banowo",
    label: "Tech Enthusiast",
    email: "ilmail@mail.com",
    url: new URL("https://basic.riq.my.id"),
    summary:
      "Mikail Thoriq is a Student in Gunadarma University, Problem solver and ☁️ Enthusiast.",
    location: {
      city: "Depok",
      region: "Jawa Barat",
      countryCode: "ID",
    },
    profiles: [
      {
        network: "LinkedIn",
        username: "mikail thoriq",
        url: new URL("https://linkedin.com/in/mikailthoriq"),
      },
      {
        network: "GitHub",
        username: "thq642",
        url: new URL("https://github.com/thq642"),
      },
    ],
  },
  work,
  education: [
    {
      name: "Gunadarma University",
      area: "Informatics",
      studyType: "Bachelor of Science",
      url: new URL("https://gunadarma.ac.id"),
      startDate: new Date("September 2022"),
      endDate: new Date("June 2026"),
      location: {
        city: "Depok",
        region: "Jawa Barat",
        countryCode: "ID",
      },
    },
  ],
};
