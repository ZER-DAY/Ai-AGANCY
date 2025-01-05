"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Flower } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/framer-variants";

const ProjectsGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      dir="rtl"
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#0A0A0A,#1E1E1E_100%)] overflow-x-clip"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="z-20 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-white text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6"
          >
            أحدث مشاريعنا
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-gray-400 text-lg sm:text-xl mb-10 flex items-center justify-center gap-2"
          >
            <Flower className="w-6 h-6 text-yellow-400" />
            كل مشروع يعكس التزامنا بالجودة والتميز في التصميم.
          </motion.h3>

          {/* Grid for projects */}
          <motion.div
            variants={containerVariants}
            className="grid gap-6 px-4 md:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard
                  project={project}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center"
          >
            <Button
              variant="default"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              اجعلها ملكك
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
