import { ethers } from "ethers";
import abi from "./abi.json";

let suppContract, address;

const suppAddress = "0x3633dbc01fda9cf258f442a6f09520bee6a19a8f";

export const providerHandler = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const account = await provider.listAccounts();
  address = account[0];
  const signer = provider.getSigner();
  suppContract = new ethers.Contract(suppAddress, abi, signer);
  console.log(suppContract);
  return address;
};

export const supperPassMint = async (signature, amount = 1) => {
  try {
    const n = await suppContract.whitelistMint(signature, amount);
    await n.wait();

    return n;
  } catch (e) {
    return false;
  }
};

export const safeMint = async (address, uri, serialNumber, warrantyDays) => {
  try {
    const n = await suppContract.grantMinterRole(address);
    await n.wait();

    console.log(n);
  } catch (e) {
    console.log(e);
    return false;
  }
};


export const whitelistMintTrack = async () => {
  try {
    const n = await suppContract.whiteListMintTracker(address);
    return n.toNumber();
  } catch (e) {
    return e.message;
  }
};
