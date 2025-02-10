import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import ilus2 from '../assets/ilus2.jpg';
import before1 from '../assets/before.png'
import arrow from '../assets/arrow.png'
import after1 from '../assets/after.png'
import before2 from '../assets/before2.png'
import after2 from '../assets/after2.png'
import before3 from '../assets/before3.png'
import after3 from '../assets/after3.png'
import scroll1 from '../assets/scroll1.png'

const Example = () => {
  return (
    
      <HorizontalScrollCarousel />
    
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-200">
        
      <div className="sticky  bg-black top-0 flex h-screen  items-center overflow-hidden">
      <h1>hi</h1>
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[650px] w-[650px] overflow-hidden bg-[transparent] rounded-xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      
    </div>
  );
};

export default Example;

const cards = [
    {
        url: scroll1,
        title: "Title 1",
        id: 1,
      },
    {
    url: before1,
    title: "Title 1",
    id: 2,
  },
  {
    url: arrow,
    id: 3,
  },
  {
    url: after1,
    title: "Title 3",
    id: 4,
  },
  {
    url: arrow,
    title: "Title 4",
    id: 5,
  },
  {
    url: before2,
    title: "Title 5",
    id: 6,
  },
  {
    url: arrow,
    title: "Title 6",
    id: 7,
  },
  {
    url: after2,
    title: "Title 7",
    id: 8,
  },
  {
    url: arrow,
    title: "Title 7",
    id: 9,
  },
  {
    url: before3,
    title: "Title 7",
    id: 10,
  },
  {
    url: arrow,
    title: "Title 7",
    id: 11,
  },
  {
    url: after3,
    title: "Title 7",
    id: 12,
  },
];