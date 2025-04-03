import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const Projects = () => {
  return (
    <section id="projects" className="bg-neutral-950 p-4 md:p-8 ">
    
  
        <div>
          
          <p className="font-playfair font-semibold text-4xl mt-64">
            <span className="text-red">PRO</span>JECTS
          </p>
         
        </div>
      <div className="mx-auto max-w-5xl">
        <Link
          heading="LOOM"
          subheading="A social media website with integrated e-commerce."
          imgSrc="./assets/p1.png"
          href="https://loom-server-qca8.onrender.com/auth"
          
          
        />
        <Link
          heading=" TRAVELNEST"
          subheading="A hotel review and ranking site for user-generated ratings"
          imgSrc="./assets/p2.png"
          href="https://travelnest1.onrender.com/listings"
        />
        <Link
          heading="DJ NOTES"
          subheading=" A notes website providing materials and academic resources."
          imgSrc="/assets/p3.png"
          href="https://note-app-one-pied.vercel.app/"
        />
        <Link
          heading="3D PORTFOLIO"
          subheading="An interactive 3D-styled portfolio website showcasing creative work."
          imgSrc="/assets/p4.png"
          href="https://3d-port-one.vercel.app/"
        />
        <Link
          heading="COFFEE SITE"
          subheading=" A fun coffee-related website featuring brew guides, café listings."
          imgSrc="/assets/p5.png"
          href="https://coffee-dun-alpha.vercel.app/"
        />
         <Link
          heading="PORTFOLIO"
          subheading="Professional portfolio displaying projects, skills, and experiences."
          imgSrc="/assets/p6.png"
          href="https://port-weld-psi.vercel.app/"
        />
         <Link
          heading="SPACESHIP GAME"
          subheading=" A space-themed game with shooting."
          imgSrc="/assets/p7.png"
          href="https://space-five-red.vercel.app/"
        />
         <Link
          heading="CAR GAME"
          subheading="A dodge game where players avoid obstacles."
          imgSrc="/assets/p8.png"
          href="https://car-delta-tawny.vercel.app/"
        />
         <Link
          heading="GENERATOR"
          subheading="A password generator tool for creating secure and random passwords."
          imgSrc="/assets/p9.png"
          href="https://passwordgen-one-pink.vercel.app/"
        />
         <Link
          heading="HELPIFY"
          subheading="A household helper website."
          imgSrc="/assets/p10.png"
          href="https://helpify-d8gr.onrender.com/trending"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    


    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};