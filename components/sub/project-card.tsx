import React from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  technologies?: string[];
  linkLabel?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  technologies = [],
  linkLabel = "View Project",
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

     {technologies.length > 0 && (
  <div className="flex flex-wrap gap-2 mt-4">
    {technologies.map((tech, index) => (
      <span key={index} className="bg-[#12122c] text-white text-xs px-3 py-1 rounded-full">
        {tech}
      </span>
    ))}
  </div>
)}

      

        {/* Link */}
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center mt-4 text-sm text-cyan-400 hover:underline"
        >
          🔗 {linkLabel}
        </Link>
      </div>
    </div>
  );
};
