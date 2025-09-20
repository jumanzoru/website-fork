"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
        About
      </h2>
    </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I’m a Computer Science student at UC San Diego, deeply passionate about software engineering, AI, and using technology to create meaningful impact. Coming from a first-generation, low-income background, I’ve seen firsthand how access to opportunity can change lives—and I’m committed to paying that forward through mentorship, research, and engineering.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          I’ve built lie detectors using Naive Bayes, predicted weather with Hidden Markov Models, and developed tools like{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://github.com/umanzorurrutia/ShelterGuide"
            target="blank"
            rel="noopener noreferrer"
          >
            ShelterGuide
          </a>{" "}
          to help unhoused individuals find emergency housing. I’m currently preparing for internships while researching machine learning interpretability under Professor Sanjoy Dasgupta.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Whether I’m tutoring Calculus students, restoring ecosystems on Santa Rosa Island, or writing backend systems in JavaScript and Python, I approach every project with a love for learning and a focus on real-world impact. I'm currently building my skills in the MERN stack, PostgreSQL, and cloud tools like AWS to become a well-rounded software engineer ready to tackle meaningful challenges.
        </p>
      </div>
    </section>
  );
}
