"use client";

import { useRef } from "react";
import { ethers } from "ethers";

import { Roboto } from "next/font/google";
import ProjectCard from "../../../components/ProjectCard";

import TokenTallyIcon from "@/app/images/token-tally-icon.png";
import MicroHackIcon from "@/app/images/micro-hack-icon.png";

import { createTeam, checkTeamExists } from "@/utils/contract_functions";

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

const testWinners: string[] = [
  "0xF12c85D071aD9612F69A0F442EA5a0e7A1A8fcb4",
  "0x57CEE0e39Ee23A1003f91fbe9Ae854E4cBD57063",
];
const testLosers: string[] = [
  "0xdEbA32F9629CE478d1D3DfD8DaCE78949bE8E3BA",
  "0x9F310Ea3F5747Ca0355628eF10604128f063d28c",
];
const admin = "0x6E8682Bb0Dcf86Eb553239960C71a93f1540d0a1";

const winnersAllocation = [20, 80];
const losersAllocation = [70, 30];

interface ProjectCardHandles {
  getSliderValue: () => number;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function ProjectDashboard({ address }: { address: string }) {
  const sliderRef1 = useRef<ProjectCardHandles>(null);
  const sliderRef2 = useRef<ProjectCardHandles>(null);

  const onSubmit = async () => {
    // if (sliderRef1.current && sliderRef2.current) {

    // }
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // const response = await signer.sendTransaction({
        //   data: "0x608060405260015f553480156012575f80fd5b50603e80601e5f395ff3fe60806040525f80fdfea264697066735822122050791d1de792e455591a902c2fe86d0e3a11c6955b860c2c90e669b772fd08bf64736f6c634300081a0033",
        // });

        // const result = await createTeam(
        //   1,
        //   testWinners,
        //   winnersAllocation,
        //   signer
        // );

        // await createTeam(2, testLosers, losersAllocation);
        // const check = await checkTeamExists(1);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("MetaMask is not installed!");
    }
  };

  return (
    <div className="p-16">
      <h1 className="text-3xl font-extrabold mb-10">Judging Screen</h1>
      <div>
        <div className="flex justify-between items-center my-4">
          <h2 className="text-base font-bold">2 Hackathon Projects</h2>
          <div className={`${roboto.className} flex gap-2`}>
            <button className="p-2 rounded-md bg-[#2b2b30] font-bold hover:bg-[#27272c] hover:cursor-pointer">
              Filter
            </button>
            <button className="p-2 flex items-center rounded-md bg-[#2b2b30] hover:bg-[#27272c] hover:cursor-pointer">
              <span className="text-gray-500">Sort by</span>
              &nbsp;
              <span className="font-bold">Default</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <ProjectCard
          ref={sliderRef1}
          projectTitle="TokenTally"
          projectDescription="A Decentralized voting dapp with programmable wallet prize distribution... "
          image_src={TokenTallyIcon}
        ></ProjectCard>
        <ProjectCard
          ref={sliderRef2}
          projectTitle="MicroHacks"
          projectDescription="A intellectual property (IP) management and collaborative content creation Dapp using SP1 and Story Protocol ..."
          image_src={MicroHackIcon}
        ></ProjectCard>
      </div>
      <button
        onClick={onSubmit}
        className="p-2 rounded-md bg-green-600 font-bold hover:bg-green-700 float-right mt-4 hover:cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
}
// #1f1f24 row
