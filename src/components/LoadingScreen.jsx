import { motion } from "motion/react";
import { useNavigate } from "react-router";

export default function SplashScreen() {
  const isFirstVisit = !localStorage.getItem("visited");
  const navigate = useNavigate();
  return (
    <motion.div
      className="loading-screen"
      initial={{ display: "flex", opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      onAnimationComplete={() => navigate(`${isFirstVisit ? 'Onboarding1' : '/Home'}`) }
    >
      <motion.img
        src="../img/newsify_logo.svg"
        alt="Newsify Logo"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 120, damping: 12 }}
      />
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Newsify
      </motion.h1>
    </motion.div>
  );
}
