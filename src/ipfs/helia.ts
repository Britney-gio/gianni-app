import { createHelia } from "helia";

export const createHeliaNode = async () => {
  const helia = await createHelia();
  return helia;
};
