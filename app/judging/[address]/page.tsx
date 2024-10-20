import { Roboto } from "next/font/google";
import ProjectCard from "./ProjectCard";

import TokenTallyIcon from "@/app/images/token-tally-icon.png";
import MicroHackIcon from "@/app/images/micro-hack-icon.png";

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

export default async function ProjectDashboard({
  params,
}: {
  params: { address: string };
}) {
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
          projectTitle="TokenTally"
          projectDescription="A Decentralized voting dapp with programmable wallet prize distribution... "
          image_src={TokenTallyIcon}
        ></ProjectCard>
        <ProjectCard
          projectTitle="MicroHacks"
          projectDescription="A intellectual property (IP) management and collaborative content creation Dapp using SP1 and Story Protocol ..."
          image_src={MicroHackIcon}
        ></ProjectCard>
      </div>
      <button className="p-2 rounded-md bg-green-600 font-bold hover:bg-green-700 float-right mt-4 hover:cursor-pointer">
        Submit
      </button>
    </div>
  );
}
// #1f1f24 row
