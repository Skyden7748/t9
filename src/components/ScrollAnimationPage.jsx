import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

// Import your local images
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";

const ScrollAnimationPage = () => {
  const [currentImage, setCurrentImage] = useState(Image1); // Track the current image
  const [isSticky, setIsSticky] = useState(false); // Track if the container is sticky
  const containerRef = useRef(null); // Ref for the sticky container
  const scrollRef = useRef(null); // Ref for the internal scrollable content
  const { scrollYProgress } = useScroll({ container: scrollRef }); // Track scroll progress

  // Update the image based on scroll progress
  scrollYProgress.on("change", (latest) => {
    if (latest < 0.33) {
      setCurrentImage(Image1);
    } else if (latest < 0.66) {
      setCurrentImage(Image2);
    } else {
      setCurrentImage(Image3);
    }
  });

  // Handle sticky behavior and internal scrolling
  useEffect(() => {
    const container = containerRef.current;
    const internalContent = scrollRef.current;

    const handleScroll = () => {
      if (container && internalContent) {
        const containerRect = container.getBoundingClientRect();
        const internalScrollHeight = internalContent.scrollHeight;
        const internalScrollTop = internalContent.scrollTop;
        const internalClientHeight = internalContent.clientHeight;

        // Check if the container is at the top of the viewport
        if (containerRect.top <= 0) {
          setIsSticky(true);

          // If the user reaches the bottom of the internal content, allow page scrolling
          if (internalScrollTop + internalClientHeight >= internalScrollHeight) {
            setIsSticky(false);
          }
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`sticky top-0 h-screen ${isSticky ? "overflow-hidden" : ""}`}
    >
      <div className="flex h-screen">
        {/* First Div: Scrollable Content */}
        <motion.div
          ref={scrollRef}
          className={`flex-1 overflow-y-scroll p-5 bg-gray-100 ${
            isSticky ? "" : "pointer-events-none"
          }`}
        >
          <div className="h-[150vh] p-5">
            <h1 className="text-3xl font-bold mb-4">Scroll Down to See Magic</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="mb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p className="mb-4">Scroll further to see the image change!</p>
          </div>
        </motion.div>

        {/* Second Div: Fixed Image */}
        <div className="flex-1 relative bg-gray-800 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage} // Use the current image from state
              alt="Dynamic Image"
              className="max-w-full max-h-full rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationPage;