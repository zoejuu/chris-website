"use client"

import { motion } from "framer-motion"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // 시작: 투명하고 20px 아래에 있음
      animate={{ opacity: 1, y: 0 }}  // 결과: 선명하고 원래 위치로
      transition={{ ease: "easeInOut", duration: 0.75 }} // 0.75초 동안 부드럽게
    >
      {children}
    </motion.div>
  )
}