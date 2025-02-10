import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import ilus2 from '../assets/ilus2.jpg';
import sky01 from '../assets/sky01.png'
import arrow from '../assets/arrow.png'
import sky02 from '../assets/sky02.png'
import sky03 from '../assets/sky03.png'
import sky04 from '../assets/sky04.png'
import sky05 from '../assets/sky05.png'
import sky06 from '../assets/sky06.png'
import sky07 from '../assets/sky07.png'
import sky08 from '../assets/sky08.png'
import sky09 from '../assets/sky09.png'
import sky10 from '../assets/sky10.png'
import sky11 from '../assets/sky11.png'
import sky12 from '../assets/sky12.png'
import after1 from '../assets/after.png'
import before2 from '../assets/before2.png'
import after2 from '../assets/after2.png'
import before3 from '../assets/before3.png'
import after3 from '../assets/after3.png'
import scroll1 from '../assets/scroll1.png'

const Examplee = () => {
  return (
    
      <HorizontalScrollCarousell />
    
  );
};

const HorizontalScrollCarousell = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-200 ">
        
      <div className="sticky  bg-black top-0 flex h-screen  items-center overflow-hidden ">
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

export default Examplee ;

const cards = [
    {
        url: sky01,
        title: "Title 1",
        id: 1,
      },
    {
    url: sky02,
    title: "Title 1",
    id: 2,
  },
  {
    url: sky03,
    id: 3,
  },
  {
    url: sky04,
    title: "Title 3",
    id: 4,
  },
  {
    url: sky05,
    title: "Title 4",
    id: 5,
  },
  {
    url: sky06,
    title: "Title 5",
    id: 6,
  },
  {
    url: sky07,
    title: "Title 6",
    id: 7,
  },
  {
    url: sky08,
    title: "Title 7",
    id: 8,
  },
  {
    url: sky09,
    title: "Title 7",
    id: 9,
  },
  {
    url: sky10,
    title: "Title 7",
    id: 10,
  },
  {
    url: sky11,
    title: "Title 7",
    id: 11,
  },
  {
    url: sky12,
    title: "Title 7",
    id: 12,
  },
];