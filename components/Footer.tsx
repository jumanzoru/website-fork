"use client";

export default function Footer() {
  return (
    <section>
      <div className="flex flex-col gap-4 lg:px-6 mt-16">
        <p className="text-sm text-start text-muted-foreground">
          © 2025 Jefferson Umanzor. Design: {" "}
          <a className="text-foreground" href="https://meikopoulos.com/">
            Alexander Meikopoulos.
          </a>
        </p>
      </div>
    </section>
  );
}
