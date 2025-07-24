"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/bayes-cover.png",
    title: "Lie Detector – Naive Bayes Text Classifier",
    description:
      "Built a binary text classifier to detect lies using a Naive Bayes model trained on labeled datasets of truthful and deceptive statements. Explored word frequencies, probabilistic inference, and real-world applications of natural language processing (NLP).",
    skills: [
      "Python",
      "Naive Bayes",
      "Natural Language Processing (NLP)",
      "Jupyter Notebooks",
      "Data Preprocessing",
      "Probability & Statistics",
    ],
    link: "https://github.com/umanzorurrutia/Lie-Detector-Agent",
  },
  {
    imagePath: "/weather-cover.png",
    title: "Weather Predictor – Hidden Markov Model",
    description:
      "Designed a weather prediction system using a discrete Hidden Markov Model (HMM) trained on real climate data. Implemented algorithms for parameter estimation and probabilistic inference, including forward-backward and Viterbi decoding.",
    skills: [
      "Python",
      "Hidden Markov Models",
      "Probability Theory",
      "Data Modeling",
      "Algorithm Implementation",
    ],
    link: "https://github.com/umanzorurrutia/Weather-Detector",
  },
  {
    imagePath: "/shelter-cover.png",
    title: "ShelterGuide – Pathfinding Web App",
    description:
      "Developed a web app to help unhoused individuals find nearby emergency shelters, built at a UCSD hackathon. Integrated Google Maps API and implemented shelter search functionality with location filtering and accessibility-focused UI.",
    skills: [
      "HTML",
      "CSS",
      "Java",
      "JavaScript",
      "Hackathon Development",
      "Team Collaboration",
    ],
    link: "https://github.com/umanzorurrutia/ShelterGuide",
  },
  {
    imagePath: "/rosas-cover.png",
    title: "Rosas Demolition Company Website",
    description:
      "Created a modern, mobile-responsive website for a local demolition business to establish their online presence and attract clients. Designed and deployed a clean, professional front end with service descriptions and contact forms.",
    skills: [
      "HTML",
      "CSS",
      "Web Design",
      "JavaScript",
      "UI/UX",
      "Vercel",
    ],
    link: "https://rosas-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
