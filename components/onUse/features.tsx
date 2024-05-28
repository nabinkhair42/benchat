"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import StepByStep from "@/public//LandingPage/Rocket.png";
import Boy from "@/public/LandingPage/boy.png";
import Library from "@/public/LandingPage/Bag.png";
import Axe from "@/public/LandingPage/Axe.png";
import Sheild from "@/public/LandingPage/Sheild.png";
import Target from "@/public/LandingPage/Target.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const featureContent = [
  {
    image: Sheild,
    title: "Step-by-Step Solutions",
    description: "Understand the problem-solving process and improve your own physics problem-solving skills."
  },
  {
    image: Axe,
    title: "Advanced Physics Problem Solving",
    description: "Instantly get accurate solutions to intricate physics numerical problems, saving you time and effort."
  },
  {
    image: StepByStep,
    title: "Interactive Graphical Representations",
    description: "Visualize complex data and concepts to gain deeper insights and enhance your learning experience."
  },
  {
    image: Target,
    title: "Customizable Problem Inputs",
    description: "Adapt the AI solver to handle a wide range of personalized and unique physics problems."
  },
  {
    image: Boy,
    title: "Real-Time Collaboration",
    description: "Enhance learning through collaboration and receive immediate feedback from others."
  },
  {
    image: Library,
    title: "Comprehensive Physics Library",
    description: "Use this extensive resource to study, reference, and understand various physics concepts and solutions."
  }
];

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold text-center md:text-5xl">Features</h1>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-6 justify-center"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {featureContent.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl w-96 bg-gradient-to-tl from-blue-500 via-pink-500 to-orange-500 shadow-md p-[1px]"
              variants={item}
            >
              <div className="group w-full h-full p-4 flex flex-col md:flex-row items-center gap-4 rounded-xl bg-white">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="bg-contain w-24 h-24 drop-shadow-2xl"
                />
                <div className="flex flex-col gap-4">
                  <h2 className="font-semibold">{feature.title}</h2>
                  <p className="text-justify">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Features;
