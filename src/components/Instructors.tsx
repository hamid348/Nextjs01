'use client';
import  {WavyBackground}  from "./ui/wavy-background";

import { AnimatedTooltip } from "./ui/animated-tooltip";

interface People{
  id: number,
  name: string,
  designation: string,
  image: string,
}

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
];


function Instructors() {
  return (
  
    
    <div
    className="h-[40rem] overflow-hidden flex items-center justify-center"
    >
       <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
      <div className="flex flex-wrap justify-center mt-16">
        {people.map((person) => (
      <div key={person.id} className="flex flex-wrap justify-center mt-16">
          
          <AnimatedTooltip items={[person]} />
        </div>
        ))}
        </div>
    </WavyBackground>
      </div>
  )
}

export default Instructors