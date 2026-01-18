import { createHelia } from "helia";
import { unixfs } from "@helia/unixfs";

export async function uploadImagesToIPFS(file: File): Promise<string> {
  const helia = await createHelia();
  const fs = unixfs(helia);

  const buffer = await file.arrayBuffer();
  const cid = await fs.addBytes(new Uint8Array(buffer));

  return cid.toString();
}
