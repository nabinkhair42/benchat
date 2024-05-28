"use client";
import React from "react";
import Image from "next/image";
import Pencil from "@/public/LandingPage/Pencil.png";
import Fetures from "@/components/onUse/features";
import NavigationBar from "@/components/ui/NavigationBar";
import { ArrowRight, CircleDot } from "lucide-react";
import PlaceholdersAndVanishInputDemo from "@/components/onUse/SearchBar";


const page = () => {
  return (
    <>
     <NavigationBar />
      {/* Hero Section  */}
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="h-screen w-screen bg-grid-black/[0.08] relative flex items-center justify-center">
          
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]">
          <Image
            src={Pencil}
            fill
            rel="preload"
            style={{ objectFit: "contain" }}
            alt="Notebook"
            className="select-none drop-shadow-2xl"
            draggable="false"
            priority
        />
          </div>
          <div className="relative z-10 flex flex-col justify-around items-center space-y-4 h-[50vh]">

            {/* version */}
            <div className="flex gap-1 bg-orange-200 border border-orange-500 text-black py-[2px] px-[3px] rounded-full shadow-md w-fit justify-center items-center">
              <CircleDot className="group text-orange-800" />
              <span className="group text-pink-700">v.0.1.1</span>
              <span className="group text-orange-600">Find-in-page bug fixes</span>
              <ArrowRight className="group text-orange-700 animate-custom-bounce" />
            </div>
              
              {/* Hero Text */}
            <div className="flex flex-col gap-4">
              <h1 className="md:text-6xl text-3xl flex gap-1 md:gap-2 font-bold">
                Welcome to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-pink-500 to-orange-500">
                  BenChat
                </span>
              </h1>
              <p className="flex items-center justify-center gap-2">
                AI Powered<span className="p-1 font-mono bg-gray-100 text-orange-500 rounded-xl shadow-md">✨Physics Numerical</span>Solver.
              </p>
            </div>

            <div className="w-full">
              <PlaceholdersAndVanishInputDemo />
            </div>
          </div>
        </div>
      </div>
      {/* Our Feature Section */}
        <Fetures />
    </>
  );
};

export default page;
