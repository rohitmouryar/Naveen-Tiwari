import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "../styles/father.css";
import profileImg from "../assets/fatherSahab.jpeg";
import bgVideo from "../assets/background.mp4";

export default function Father() {
  // 🔥 Mouse Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <div className="hero">
      {/* 🎥 BACKGROUND VIDEO */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      {/* LEFT */}
      <motion.div
        className="hero-left"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <span>
            <b>Mr. Dhanajay Kumar Tiwari</b>
          </span>
        </motion.h1>

        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <span>Designation:</span> Senior Material Controller
        </motion.h3>

        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <span>Location:</span> Doha - Qatar
        </motion.h3>

        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <span>Phone:</span> +91 7793165907
        </motion.h3>
        {/* <motion.p
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0 },
          }}
        >
          Dedicated professional with strong experience in material management,
          inventory control, and logistics coordination.
        </motion.p> */}

        {/* <motion.button
          className="btn"
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Back
        </motion.button> */}
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={profileImg}
          alt="profile"
          /* 🔥 3D Tilt */
          style={{ rotateX, rotateY }}
          /* ✨ Floating */
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
          /* 💎 Hover */
          whileHover={{ scale: 1.08 }}
          /* 🧠 Mouse Move */
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
        />
      </motion.div>
    </div>
  );
}
