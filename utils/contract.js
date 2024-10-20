import { ethers } from "ethers";
import ABI from "@/utils/abi";

const FLOW_RPC_URL = "https://testnet.evm.nodes.onflow.org";
const CONTRACT_ADDRESS = "0xF6b1f1539d61C418705DfE0A2933B33A473E7d9E";
// Setup provider
const provider = new ethers.providers.JsonRpcProvider(FLOW_RPC_URL);

export const getContract = (signer) => {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};

export const getProvider = () => provider;
