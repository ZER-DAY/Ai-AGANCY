"use client";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useState } from "react";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    annualPrice: 90,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    annualPrice: 190,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section className="py-24 bg-white" aria-labelledby="pricing-heading">
      <div className="container">
        <div className="centered-content-container">
          <h2 id="pricing-heading" className="h2-style">Pricing</h2>
          <p className="paragraph text-center" id="pricing-description">
            Free forever. Upgrade for unlimited tasks, better security and
            exclusive features.
          </p>
          <div className="flex items-center justify-center mt-4">
            <span className={`mr-2 ${!isAnnual ? "text-blue-500" : "text-gray-500"}`}>Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isAnnual}
                onChange={handleToggle}
                aria-label="Toggle billing period"
              />
              <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 transition-colors duration-300"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6"></span>
            </label>
            <span className={`ml-2 ${isAnnual ? "text-blue-500" : "text-gray-500"}`}>Annual</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center mt-20 lg:flex-row lg:items-start lg:justify-center">
          {pricingTiers.map(
            (
              { title, monthlyPrice, annualPrice, buttonText, popular, inverse, features },
              index
            ) => (
              <div
                key={title}
                className={twMerge(
                  "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_8px_16px_#EAEAEA] max-w-xs w-full transition-transform duration-200 hover:scale-105 focus-within:scale-105",
                  inverse === true && "border-black bg-black text-white"
                )}
                tabIndex={0}
                aria-labelledby={`${title}-title`}
                aria-describedby={`${title}-features`}
              >
                <div className="flex justify-between">
                  <h3
                    id={`${title}-title`}
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/50"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                        animate={{ backgroundPositionX: "200%" }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-8">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    £{isAnnual ? annualPrice : monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white/50"
                    )}
                  >
                    /{isAnnual ? "year" : "month"}
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-8 focus:outline-none focus:ring-2 focus:ring-blue-500",
                    inverse === true && "btn-inverse"
                  )}
                  aria-label={`Select the ${title} plan`}
                >
                  {buttonText}
                </button>
                <ul
                  className="flex flex-col gap-5 mt-8"
                  id={`${title}-features`}
                >
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
