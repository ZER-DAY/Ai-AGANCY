"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

export const CallToAction = () => {
  const ctaRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const starControls = useAnimation();
  const springControls = useAnimation();

  useEffect(() => {
    const hoverAnimation = async () => {
      await starControls.start({
        y: [0, -10, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      });
    };
    const springHoverAnimation = async () => {
      await springControls.start({
        y: [0, 15, 0],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      });
    };
    hoverAnimation();
    springHoverAnimation();
  }, [starControls, springControls]);

  return (
    <section
      ref={ctaRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="centered-content-container">
          <h2 className="h2-style">Sign up for free today</h2>
          <p className="paragraph text-center">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="mt-6 flex gap-4 items-center">
            <button className="btn btn-primary">Get for free</button>
            <motion.button
              className="btn btn-text gap-1"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span>Learn more</span>
              <motion.div
                key={"arrow"}
                initial={{ x: 0 }}
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-5 w-5 pt-0.5" />
              </motion.div>
            </motion.button>
          </div>
        </div>
        <div className="relative">
          <motion.img
            src={starImage.src}
            alt="Star image"
            className="hidden md:block md:absolute -left-[280px] lg:-left-40 -top-80 lg:-top-96"
            width={360}
            height={360}
            initial={{ y: 0 }}
            animate={starControls}
            style={{
              translateY: shouldAnimate ? translateY : 0,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring image"
            className="hidden md:block md:absolute -right-[200px] lg:right-[-150px] -top-52 lg:-top-40"
            width={360}
            height={360}
            initial={{ y: 0 }}
            animate={springControls}
            style={{
              translateY: shouldAnimate ? translateY : 0,
            }}
          />
        </div>
      </div>
    </section>
  );
};
