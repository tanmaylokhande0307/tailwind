import { MessageSquareDot } from "lucide-react"
import DashBoard from "./components/DashBoard"
import NavigationBar from "./components/NavigationBar"
import { useState } from "react"
import { motion } from "framer-motion"

const variants = {
  open: { height: "600px" },
  closed: { height: "0px" }
}

function App() {
  const [isChatbotOpen, setIsChatBotOpen] = useState(true)

  return (
    <>
      <div className="flex relative">
        <NavigationBar></NavigationBar>
        <main>
          <DashBoard></DashBoard>
        </main>
        <footer className="flex flex-col">
          <motion.div animate={isChatbotOpen ? "open" : "closed"} variants={variants} className="absolute bottom-[4rem] right-[4rem] w-[400px] bg-[#CBC3E3] flex flex-col p-4 space-y-4">
            {isChatbotOpen && (<><div className="flex justify-start">
              <span className="bg-white p-2 rounded-md shadow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, saepe.</span>
            </div>
              <div className="flex justify-end">
                <span className="bg-white p-2 rounded-md shadow">Lorem ipsum dolor sit amet.</span>
              </div></>)}
          </motion.div>
          <div onClick={() => setIsChatBotOpen(!isChatbotOpen)} className="absolute bottom-10 right-10 bg-[#800080] h-[60px] w-[60px] flex justify-center items-center rounded-full text-white">
            <MessageSquareDot />
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
