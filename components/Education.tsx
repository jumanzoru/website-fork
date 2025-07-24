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
            UC San Diego • B.S. Mathematics–Computer Science
          </p>
          <p className="text-slate-400 text-sm font-bold">
            Sep 2022 – Jun 2026 (Expected) • GPA: 3.5
          </p>

          <CardDescription className="py-3 text-muted-foreground">
            <strong>Computer Science & Engineering Courses:</strong><br />
            • CSE 8A – Accelerated Intro to Programming (TP)<br />
            • CSE 11 – Accelerated Intro to Programming (A)<br />
            • CSE 12 – Basic Data Structures & Object-Oriented Design (A)<br />
            • CSE 15L – Software Tools & Techniques Lab (A)<br />
            • CSE 30 – Computer Organization & Systems Programming (C)<br />
            • CSE 100 – Advanced Data Structures (A)<br />
            • CSE 101 – Design & Analysis of Algorithms (A–)<br />
            • CSE 105 – Theory of Computation (A–)<br />
            • CSE 110 – Software Engineering (In Progress)<br />
            • CSE 132A – Database System Principles (In Progress)<br />
            • CSE 150A – AI: Probabilistic Models (B+)<br />
            • CSE 151A – Machine Learning: Learning Algorithms (A–)<br />
            • CSE 158R – Recommender Systems and Web Mining (In Progress)
          </CardDescription>

          <CardDescription className="pb-3 text-muted-foreground">
            <strong>Mathematics Courses:</strong><br />
            • MATH 20A – Calculus I (TP)<br />
            • MATH 20B – Calculus II (A–)<br />
            • MATH 20C – Calculus III (B)<br />
            • MATH 20D – Differential Equations (B)<br />
            • MATH 20E – Vector Calculus (B+)<br />
            • MATH 18 – Linear Algebra (B)<br />
            • MATH 109 – Mathematical Reasoning (A)<br />
            • MATH 154 – Discrete Math & Graph Theory (A)<br />
            • MATH 180A – Intro to Probability (B)<br />
            • MATH 181A – Intro to Mathematical Statistics I (A–)<br />
            • MATH 173A – Optimization for Data Science I (In Progress)<br />
            • MATH 103A – Modern Algebra I (Planned)<br />
            • MATH 103B – Modern Algebra II (Planned)
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="lg:p-6 mb-4 flex flex-col w-full min-h-fit border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
        <CardContent className="p-0">
          <p className="text-foreground font-bold">
            Grossmont College • Non-Degree Coursework
          </p>
          <p className="text-slate-400 text-sm font-bold">
            Sep 2022 – Jun 2027 (Expected)
          </p>
          <CardDescription className="py-3 text-muted-foreground">
            GPA: 4.0 • Completed GE requirements to accelerate UCSD graduation timeline.
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
}
