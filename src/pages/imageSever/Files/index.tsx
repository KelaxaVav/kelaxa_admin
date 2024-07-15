import React from "react";
import { ReactFileManager } from "@thelicato/react-file-manager";
import "@thelicato/react-file-manager/dist/style.css";

const dummyFileSystem = [
  { id: "0", name: "/", path: "/", isDir: true },
  { id: "31258", name: "report.pdf", isDir: false, parentId: "0" },
  { id: "31259", name: "Documents", isDir: true, parentId: "0", path: "/Documents" },
  { id: "31261", name: "Personal", isDir: true, parentId: "31259", path: "/Documents/Personal" },
  { id: "31260", name: "report.docx", isDir: false, parentId: "0" },
  { id: "31267", name: "Images", isDir: true, parentId: "0", path: "/Images" },
  { id: "31262", name: "Choose file", isDir: true, parentId: "0", path: "/Choose file" },
  { id: "31260", name: "logo.png", isDir: false, parentId: "31267" },

];

function FileExplorer() {

  const uploadFiles = async (fileData: any, folderId: string) => {
  console.log({fileData, folderId});
  
  }    


  return (
    <div className="container">
      <ReactFileManager fs={dummyFileSystem} onUpload={uploadFiles} />
    </div>
  );
}


export default FileExplorer; 