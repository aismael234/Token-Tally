import { getContract, getProvider } from "./contract";

export const createTeam = async (teamId, members, allocations, signer) => {
  console.log("Create team?");
  const contract = getContract(signer);
  console.log("get contrat", contract);
  contract.connect(signer);
  const tx = await contract.createTeam(teamId, members, allocations);
  await tx.wait();
  return tx;
};

export const distributeToTeam = async (teamId, totalAmount, signer) => {
  const contract = getContract();
  const tx = await contract.distributeToTeam(teamId, totalAmount);
  await tx.wait();
  return tx;
};

export const distributeRewards = async (teamId, signer) => {
  const contract = getContract();
  const tx = await contract.distributeRewards(teamId);
  await tx.wait();
  return tx;
};

export const checkTeamExists = async (teamId) => {
  const contract = getContract();
  return await contract.teamExists(teamId);
};
