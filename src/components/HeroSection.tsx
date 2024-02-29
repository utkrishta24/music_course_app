"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 120 }}
          whileInView={{ opacity: 1, y: 60 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-10 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Bring Music to Ears
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-full mx-auto">

              "I think music in itself is healing. It's an explosive expression
              of humanity. It's something we are all touched by. No matter what
              culture we're from, everyone loves music." - Billy Joel
            </p>
            <div>
              <Link href={"/projects"} className="text-4xl text-cyan-50">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Explore Projects
                </Button>
              </Link>
            </div>
          </div>
        </motion.h1>
      </LampContainer>
    </div>
  );
}

export default HeroSection;
