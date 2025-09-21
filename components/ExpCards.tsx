"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Sep 2025 — Present",
    currentPosition: "Machine Learning Researcher",
    place: "UC San Diego CSE Department",
    previousPositions: [""],
    description:
      "Starting Fall 2025, I’ll be conducting faculty-led research under Professor Sanjoy Dasgupta as part of a focused working group on machine learning interpretability at UC San Diego.",
    skills: [
      "Machine Learning",
      "Research",
    ],
  },
  {
    timeline: "Jul 2022 — Jul 2022",
    currentPosition: "Entrepreneurship Mentor & Project Lead",
    place: "Project ECHO",
    previousPositions: [""],
    description:
      "Taught entrepreneurship and presentation skills to underserved high school students, leading a team that placed second in a regional pitch competition. Designed lesson plans, coached students one-on-one, and built confidence through real-world business frameworks.",
    skills: [
      "Curriculum Development",
      "Project Leadership",
      "Public Speaking",
      "Presentation Design",
      "Team Leadership",
    ],
  },
  {
    timeline: "Sep 2022 — Jun 2023",
    currentPosition: "Mathematics (Calculus) Tutor",
    place: "Freelance",
    previousPositions: [""],
    description:
      "Provided one-on-one tutoring in Calculus I–III, helping students strengthen conceptual understanding and problem-solving strategies. Tailored instruction to individual learning styles and fostered long-term academic confidence in STEM subjects.",
    skills: [
      "Mathematical Reasoning",
      "Calculus Instruction",
      "Problem-Solving",
      "Peer Tutoring",
    ],
  },
  {
    timeline: "Nov 2022 — Nov 2022",
    currentPosition: "Research Field Support",
    place: "Santa Rosa Island Research Station",
    previousPositions: [
      "",
    ],
    description:
      "Contributed to ecological restoration and water redirection efforts on Santa Rosa Island as part of a CSU Channel Islands initiative. Assisted with habitat monitoring, erosion control, and field data collection in a team-based conservation environment.",
    skills: [
      "Field Research",
      "Environmental Monitoring",
      "Ecological Restoration",
      "Scientific Data Collection",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
        Experience
      </h2>
    </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="/jeff-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View My Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
