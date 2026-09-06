import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ children, delay = 0, y = 28, className = '', style }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`reveal ${className}`}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
