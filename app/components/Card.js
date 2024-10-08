import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

function Card({ text, index }) {
  return (
    <motion.div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70vw',
        maxWidth: '400px',
        height: '30vh',
        borderRadius: '8px',
        background: index % 2 === 0 ? '#0b3663' : '#275f9c',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        margin: '10px 0px',
        padding: '20px',
        color: '#fff',
      }}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1
        }
      }}
      viewport={{ once: true }}
    >
      <Box sx={{ fontSize: '24px', textAlign: 'center' }}>
        {text}
      </Box>
    </motion.div>
  );
}

export default Card;
