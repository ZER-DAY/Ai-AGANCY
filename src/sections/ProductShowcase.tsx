"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useMotionValueEvent,
} from "framer-motion";

export const ProductShowcase = () => {
  const productRef = useRef(null);
  const controls = useAnimation();

  // For rotateX animation
  const { scrollYProgress: scrollYProgressRotate } = useScroll({
    target: productRef,
    offset: ["start end", "start start"],
  });

  // For translateY animation
  const { scrollYProgress: scrollYProgressTranslate } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(
    scrollYProgressTranslate,
    [0, 1],
    [300, -300]
  );
  const rotateX = useTransform(scrollYProgressRotate, [0, 1], [90, 0]);

  const animateOpacity = () => {
    controls.start({
      opacity: 1,
      transition: { ease: "linear" },
    });
  };

  useMotionValueEvent(scrollYProgressRotate, "change", (value) => {
    if (value > 0 && value <= 1) {
      animateOpacity();
    }
  });

  useEffect(() => {
    // Check initial scroll position
    const initialValue = scrollYProgressRotate.get();
    if (initialValue > 0 && initialValue <= 1) {
      animateOpacity();
    }
  }, []);

  return (
    <section
      ref={productRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="centered-content-container">
          <div className="pill">Boost your productivity</div>
          <h2 className="h2-style">A more effective way to track progress</h2>
          <p className="paragraph text-center">
            Effortlessly turn your ideas into a fully functional, responsive
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <motion.img
            src={productImage.src}
            className="pt-10"
            alt={"Image of the product"}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={controls}
            style={{
              rotateX,
            }}
          />
          <motion.img
            src={pyramidImage.src}
            className="hidden md:block absolute -top-24 -right-32"
            alt={"Pyramid Image"}
            width={262}
            height={262}
            initial={{ y: 300 }}
            style={{
              y: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            className="hidden md:block absolute bottom-8 lg:bottom-24 -left-36 lg:-left-40"
            alt={"Tube Image"}
            width={262}
            height={262}
            initial={{ y: 300 }}
            style={{
              y: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
