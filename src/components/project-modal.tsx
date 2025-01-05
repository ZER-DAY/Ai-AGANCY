"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Project } from "@/lib/types";
import { BadgeCheck } from "lucide-react";
import { blurhashToBase64 } from "blurhash-base64";
const ProjectModal = ({ project }: { project: Project }) => {
  return (
    <div dir="rtl">
      <Dialog >
        <DialogTrigger>
          <Image
            src={project.image}
            alt={`Project in ${project.location}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            placeholder="blur"
            blurDataURL={blurhashToBase64("LQJ@LFJnp{-Uxuf6RjWVK5s:xGRj")}
            className="object-cover rounded-lg"
            onError={(e) => console.error("Image loading error:", e)}
          />
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] w-[95%] md:w-[85%] lg:w-[70%] p-4 md:p-6 overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-6 overflow-y-auto">
            <div className="flex-shrink-0 w-full md:w-[40%]">
              <Image
                src={project.image}
                alt={`Project in ${project.location}`}
                width={400}
                height={400}
                priority
                className="object-cover rounded-lg w-full h-[200px] md:h-[300px] lg:h-[400px]"
                onError={(e) => console.error("Image loading error:", e)}
              />
            </div>

            <DialogHeader className="flex-1 space-y-4">
              <div>
                <DialogTitle className="text-2xl md:text-3xl lg:text-4xl text-left font-bold tracking-tighter bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {project.title}
                </DialogTitle>
                <span className="block text-muted-foreground text-sm mt-1 text-left">
                  {project.location}
                </span>
              </div>

              <DialogDescription className="text-slate-950 text-base md:text-lg leading-relaxed text-left">
                {project.description}
              </DialogDescription>

              <ul className="list-inside text-slate-950 space-y-3 text-left">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start md:items-center gap-2 text-sm md:text-base"
                  >
                    <BadgeCheck className="w-4 h-4 flex-shrink-0 text-yellow-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectModal;
