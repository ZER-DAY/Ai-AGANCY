"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import logoAlasel from "@/assets/Logoasel.png";
import cyclinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      dir="rtl"
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#0A0A0A,#1E1E1E_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className=" md:flex items-center">
          <div className="md:w-[478px]">
            <div className="pill">
              الأصيل لخدمات الذكاء الاصطناعي والتسويق الرقمي
            </div>
            <h1 className="h2-style leading-relaxed">
              فضاء رقمي آمن ومفيد يتوائم مع تطلعاتنا وقيمنا الأصيلة
            </h1>
            <p className="paragraph leading-relaxed">
              نحن شركة متخصصة في التسويق الرقمي والاستثمار، ونعمل على تطوير
              أكواد نماذج الذكاء الاصطناعي التوليدي. نطمح لأن نصبح شريكًا
              استراتيجيًا يساهم في إضاءة دروب الشباب والمجتمع، نفتخر بفريقنا
              العامل وشرائكنا الداعمين.
            </p>
            <div className="mt-6 flex gap-4 items-center">
              <button
                className="bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight"
                aria-label="Get for free"
              >
                سجل معنا
              </button>
              <motion.button
                className="bg-amber-300 text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight"
                aria-label="Learn more about Pathway to productivity"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                tabIndex={0} // Ensures the button is focusable via keyboard
              >
                <span>تعرف اكثر عنا </span>
                <motion.div
                  key={"arrow"}
                  initial={{ x: 0 }}
                  animate={{ x: isHovered ? 10 : 0 }} // Increased movement for better visibility
                  transition={{ type: "spring", stiffness: 300 }} // Smoother transition
                >
                  <ArrowRight className="h-5 w-5 pt-0.5" />
                </motion.div>
              </motion.button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={logoAlasel.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:-top-8 -left-32 lg:-left-20lg:left-0"
              animate={{
                translateY: [-5, 5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            {/* <motion.img
              src={cyclinderImage.src}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 lg:-left-20 md:absolute"
              width={220}
              height={220}
              initial={{ y: 0 }}
              style={{
                translateY: shouldAnimate ? translateY : 0,
              }}
            /> */}
            {/* <motion.img
              src={noodleImage.src}
              alt="Noodle image"
              className="hidden lg:block top-[524px] left-[448px] md:absolute"
              width={220}
              height={220}
              initial={{ y: 0, rotate: 30 }}
              style={{
                translateY: shouldAnimate ? translateY : 0,
                rotate: 30,
              }}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
