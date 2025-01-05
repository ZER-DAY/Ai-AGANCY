"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import ArrowRight from "@/assets/arrow-right.svg";
import logoAlasel from "@/assets/Logoasel.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  const arrowControls = useAnimation();

  return (
    <header dir="rtl" className="sticky top-0 backdrop-blur-sm z-20">
      {/* الجزء العلوي من الهيدر */}
      <div className="flex justify-center items-center py-2 bg-[#1A1A1A] text-white text-sm gap-2">
        <p className="text-white/80 hidden md:block">
          نطلق نحو مستقبل مشرق مع وكالة الأصيل، حيث نبني معًا خطواتك الأولى نحو
          النجاح والتطور
        </p>
        <Link href="#">
          <motion.div
            className="inline-flex gap-1 items-center cursor-pointer"
            onHoverStart={() => arrowControls.start({ x: 5 })}
            onHoverEnd={() => arrowControls.start({ x: 0 })}
          >
            <p>أنطلق الان</p>
            <motion.div animate={arrowControls} transition={{ duration: 0.2 }}>
              <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
            </motion.div>
          </motion.div>
        </Link>
      </div>

      {/* الجزء الرئيسي من الهيدر */}
      <div className="py-5 bg-[#1A1A1A]">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* الشعار */}
            <div className="inline-flex relative before:content-[''] before:opacity-40 before:h-full before:w-full before:bg-[linear-gradient(to_right,#FF00FF,#FF00FF,#FFFFFF,#00FFFF,#00FFFF,#FFFFFF,#00FFFF,#00FFFF,#00FFFF,#FFFFFF,#FFD700,#FFFFFF)] before:absolute before:blur-md">
              <Image
                src={logoAlasel}
                alt="Footer Logo"
                height={70}
                className="relative"
              />
            </div>

            {/* أيقونة القائمة (للأجهزة المحمولة) */}
            <MenuIcon className="h-5 w-5 md:hidden text-white" />

            {/* قائمة التنقل (للأجهزة الكبيرة) */}
            <nav className="hidden md:flex gap-6 text-white/60 items-center">
              <a href="#">الرئيسية</a>
              <a href="#">تيك توك</a>
              <a href="#">الزبائن</a>
              <a href="#">من نحن</a>
              <a href="#">اتصل بنا</a>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                انطلق معنا
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
