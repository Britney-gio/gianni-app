//import { useState } from "react";
//import { uploadImagesToIPFS } from "../ipfs/uploadImagesToIPFS.ts";

//export default function UploadImages() {
//const [cid, setCid] = useState("");

//const handleFileChange = async (e: React.//ChangeEvent<HTMLInputElement>) => {
//const file = e.target.files?.[0];
//if (!file) return;

//const newCid = await uploadImagesToIPFS(file);
//setCid(newCid);
//};

//return (
//<main style={{ padding: 24 }}>
//<h1>Upload immagine su IPFS</h1>

//<input type="file" accept="image/*" onChange={handleFileChange} />

//{cid && (
//<p>
//CID: {cid}
//<br />
//<a
//href={`https://${cid}.ipfs.dweb.link`}
//target="_blank"
//rel="noreferrer"
//>
//Apri immagine
//</a>
//</p>
//)}
//</main>
//);
//}
