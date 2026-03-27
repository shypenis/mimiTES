/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronDown } from 'lucide-react';

// --- Components ---

const FloatingElement = ({ children, delay = 0, duration = 4, xOffset = 0 }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ 
      y: [-20, 20, -20],
      opacity: [0.4, 0.8, 0.4],
      x: [xOffset - 10, xOffset + 10, xOffset - 10]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute pointer-events-none text-rose-300/40"
  >
    {children}
  </motion.div>
);

const HeartDivider = () => (
  <div className="flex justify-center gap-4 my-8 text-rose-300">
    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>♡</motion.span>
    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}>♡</motion.span>
    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}>♡</motion.span>
  </div>
);

export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [showHidden, setShowHidden] = useState(false);

  const hiddenMessages = [
    "i love you more than words can say... ♥",
    "ur the best thing that ever happened to me. =^.^=",
    "i'm so lucky to have you by my side. ♡",
    "u are a beautiful soul. ฅ^•ﻌ•^ฅ",
    "forever isn't long enough with u. ♥",
  ];

  const handleLoveClick = () => {
    setClickCount((prev) => (prev + 1) % hiddenMessages.length);
    setShowHidden(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F5] text-[#5D4037] selection:bg-rose-200 selection:text-rose-900 font-serif overflow-x-hidden">
      
      {/* --- Hero Section --- */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Decorative Floating Elements */}
        <FloatingElement delay={0} xOffset={-150} duration={5}>♥</FloatingElement>
        <FloatingElement delay={1} xOffset={180} duration={6}>ฅ^•ﻌ•^ฅ</FloatingElement>
        <FloatingElement delay={2} xOffset={-100} duration={4}>♡</FloatingElement>
        <FloatingElement delay={3} xOffset={120} duration={7}>=^.^=</FloatingElement>
        <FloatingElement delay={0.5} xOffset={0} duration={5.5}>♥</FloatingElement>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-rose-500">
            to the one who makes my world sunshine and rainbows.
          </h1>
          <p className="text-lg md:text-xl text-rose-400 font-light italic max-w-xl mx-auto">
            u are the most beautiful soul i've ever known.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-rose-300"
        >
          <span className="text-sm font-light">scroll for a little journey</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span className="block text-xl">ฅ^•ﻌ•^ฅ</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* --- Love Note Section --- */}
      <section className="max-w-2xl mx-auto px-6 py-24 leading-relaxed text-lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <p className="mb-8">
            dearest mawada,
          </p>
          <p className="mb-6">
            i've been trying to find the right words to tell you how much you mean to me, but sometimes the heart feels things that language can't capture. u are the comfort of my life and the bright spark in it.
          </p>
          
          <HeartDivider />

          <p className="mb-6">
            i appreciate every little thing about u, the way your eyes crinkle when u laugh, the kindness and care u show to everyone around u, and the way u make even the simplest moments feel like an adventure.
          </p>

          <HeartDivider />

          <p className="mb-6">
            looking back at our memories, i realize that it's not just the big milestones that matter, but the small, shared glances, the inside jokes, and the way we just click together. u are my favorite person, my best friend, and my home.
          </p>

          <HeartDivider />

          <p className="mb-8">
            thank u for being u. thank u for choosing me every day. i admire u, ur grace, and the beautiful way u see the world. i am so  grateful to be walking this path with u.
          </p>
          <p className="font-bold text-rose-500">
            i love you so much my rouhi.
          </p>
        </motion.div>
      </section>

      {/* --- Memories Section --- */}
      <section className="bg-rose-50/50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-rose-400">moments i treasure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "the first time we talked and i send u to china.",
              "the time we spend together day and night.",
              "the way u smile when we look at each other for long.",
              "everytime u say goodmorning and i miss you.",
              "our shared dreams and the quiet plans we make for the future.",
              "The comfort of ur voice when u talk"
            ].map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                className="p-6 bg-white rounded-2xl border border-rose-100 shadow-sm transition-all duration-300 cursor-default group"
              >
                <span className="block text-rose-300 mb-2 text-xl group-hover:text-rose-500 transition-colors">=^.^=</span>
                <p className="text-[#795548]">{memory}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why I Love You Section --- */}
      <section className="py-24 px-6 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-rose-400">Why I Love You</h2>
        <div className="space-y-8">
          {[
            { text: "ur heart is the kindest place in this galaxy.", icon: "♥" },
            { text: "u make me want to be a better person.", icon: "ฅ^•ﻌ•^ฅ" },
            { text: "ur laugh and smile makes my world light up.", icon: "♡" },
            { text: "u always here for me no matter what.", icon: "=^.^=" },
            { text: "u are my peace.", icon: "♥" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-6"
            >
              <span className="text-2xl text-rose-300 w-12 text-center">{item.icon}</span>
              <p className="text-lg border-l-2 border-rose-100 pl-6 py-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Interactive Section --- */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-md mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoveClick}
            className="px-8 py-4 bg-rose-400 text-white rounded-full font-bold shadow-lg shadow-rose-200 hover:bg-rose-500 transition-colors mb-8"
          >
            Click if u love me
          </motion.button>
          
          <div className="h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {showHidden && (
                <motion.p
                  key={clickCount}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-xl font-medium text-rose-600 italic"
                >
                  {hiddenMessages[clickCount]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <p className="text-xs text-rose-300 mt-4">(keep clicking for more surprises!)</p>
        </div>
      </section>

      {/* --- Final Message --- */}
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        {/* More floating hearts for the climax */}
        {[...Array(12)].map((_, i) => (
          <FloatingElement key={i} delay={i * 0.5} xOffset={(i - 6) * 40} duration={4 + Math.random() * 4}>
            {i % 2 === 0 ? "♥" : "♡"}
          </FloatingElement>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="z-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-rose-500 mb-8">
            u are my forever.
          </h2>
          <p className="text-xl md:text-2xl text-[#8D6E63] max-w-2xl mx-auto leading-relaxed">
            no matter where life takes us, i promise to always hold ur hand, to listen to ur stories, and to love you more with every passing year.
          </p>
          <div className="mt-12 text-3xl text-rose-300">
            ฅ^•ﻌ•^ฅ ♥ =^.^=
          </div>
        </motion.div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 px-6 border-t border-rose-100 text-center bg-rose-50/30">
        <p className="text-rose-400 mb-4 italic">with all my love.</p>
        <p className="font-bold text-rose-500 text-xl tracking-widest mb-8">— MOE</p>
        <div className="flex justify-center gap-4 text-rose-200 text-xs overflow-hidden whitespace-nowrap opacity-50">
          {[...Array(10)].map((_, i) => (
            <span key={i}>ฅ^•ﻌ•^ฅ =^.^= ฅ^•ﻌ•^ฅ</span>
          ))}
        </div>
      </footer>

      {/* Global CSS for smooth scroll */}
      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }
      `}} />
    </div>
  );
}
