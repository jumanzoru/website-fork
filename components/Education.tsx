"use client";

import { Card, CardContent, CardDescription } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
  <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
    Education
  </h2>
</div>


      <Card className="lg:p-6 mb-4 flex flex-col w-full min-h-fit border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
        <CardContent className="p-0">
          <p className="text-foreground font-bold">
            UC San Diego • B.S. Computer Science
          </p>
          <p className="text-slate-400 text-sm font-bold">
            Sep 2023 – Jun 2027 (Expected) • Major GPA: 3.675
          </p>

          <CardDescription className="py-3 text-muted-foreground">
            <strong>Computer Science & Engineering Courses:</strong><br />
            • CSE 8A+11: Python & Java Programming<br />
            • CSE 12: Data Structures & Object-Oriented Design<br />
            • CSE 15L: Software Tools & Techniques Lab<br />
            • CSE 30: Computer Organization & Systems Programming<br />
            • CSE 100+101: Advanced Data Structures & Algorithms<br />
            • CSE 105: Theory of Computation<br />
            • CSE 110: Software Engineering<br />
            • CSE 132A: Database System Principles<br />
            • CSE 150A: AI: Probabilistic Models<br />
            • CSE 151A: Machine Learning: Learning Algorithms<br />
            • CSE 158R: Recommender Systems and Web Mining
          </CardDescription>

          <CardDescription className="pb-3 text-muted-foreground">
            <strong>Mathematics Courses:</strong><br />
            • MATH 20A-E: Calculus I-IV (Vector Calculus)<br />
            • MATH 20D: Differential Equations<br />
            • MATH 18: Linear Algebra<br />
            • MATH 109: Mathematical Reasoning (Proofs)<br />
            • MATH 154: Discrete Math & Graph Theory<br />
            • MATH 180A+181A: Probability & Statistics<br />
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="lg:p-6 mb-4 flex flex-col w-full min-h-fit border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
        <CardContent className="p-0">
          <p className="text-foreground font-bold">
            Grossmont College
          </p>
          <p className="text-slate-400 text-sm font-bold">
            Summer 2024, Summer 2025, Fall 2025
          </p>
          <CardDescription className="py-3 text-muted-foreground">
            GPA: 4.0 • Completed GE requirements to accelerate UCSD graduation timeline.
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
}
