"use client";
import XIcon from "@/assets/social-x.svg";
import InstagramIcon from "@/assets/social-insta.svg";
import LinkedInIcon from "@/assets/social-linkedin.svg";
import PinterestIcon from "@/assets/social-pin.svg";
import YoutubeIcon from "@/assets/social-youtube.svg";
import logoSaaSImage from "@/assets/logosaas.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedLink = ({ text }: { text: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const characters = Array.from(text);

  const containerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const characterVariants = {
    initial: { y: 2 },
    hover: { y: -2 },
  };

  return (
    <motion.a
      href="#"
      className="relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      variants={containerVariants}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariants}
          transition={{ type: "spring", stiffness: 100, damping: 4 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.24 }}
      />
    </motion.a>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] py-10 text-sm">
      <div className="centered-content-container">
        <div className="flex flex-col items-center gap-y-6">
          <div className="inline-flex relative group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF00FF,4#FF00FF,#FFFFFF,#00FFFF,#00FFFF,#FFFFFF,#00FFFF,#00FFFF,#00FFFF,#FFFFFF,#FFD700,#FFFFFF)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
            <Image
              src={logoSaaSImage}
              alt="Footer Logo"
              height={40}
              className="relative z-10"
            />
          </div>
          <nav className="flex flex-col items-center md:flex-row gap-4">
            <AnimatedLink text="About" />
            <AnimatedLink text="Features" />
            <AnimatedLink text="Customers" />
            <AnimatedLink text="Pricing" />
            <AnimatedLink text="Help" />
            <AnimatedLink text="Careers" />
          </nav>
        </div>
        <div className="flex gap-4 py-6">
          <XIcon className="transform transition-all duration-200 hover:scale-110 hover:text-white cursor-pointer" />
          <InstagramIcon className="transform transition-all duration-200 hover:scale-110 hover:text-white cursor-pointer" />
          <LinkedInIcon className="transform transition-all duration-200 hover:scale-110 hover:text-white cursor-pointer" />
          <PinterestIcon className="transform transition-all duration-200 hover:scale-110 hover:text-white cursor-pointer" />
          <YoutubeIcon className="transform transition-all duration-200 hover:scale-110 hover:text-white cursor-pointer" />
        </div>
        <p className="text-center text-pretty">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
