import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { ExperienceSection } from "@/components/sub/ExperienceSection";
import Certifications from "@/components/sub/Certifications";
import { ContactSection } from "@/components/sub/contact";
export default function Home() {
  const experiences = [
  {
    title: "Web Application Developer Intern",
    company: "MNP Solutions",
    description:
      "Developed and maintained web applications using .NET framework. Worked with MySQL databases and improved system performance.",
    period: "2023 - 2024",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    description:
      "Built static websites for local clients. Focused on responsive design, accessibility, and performance. Delivered tailored solutions through close client collaboration.",
    period: "2023 - Present",
  },
];

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <ExperienceSection experiences={experiences}/>
        <Certifications />
        <ContactSection/>
      </div>
    </main>
  );
}
