// pages/index.js
"use client";
import Sidebar from "../components/Sidebar";
import EditorPage from "../components/Editor";
import 'tailwindcss/tailwind.css'
import { useEffect, useState } from "react";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSK1LXKkYKgs1vkOvVLlzUHf6u3jgYQCI",
  authDomain: "dues-35631.firebaseapp.com",
  databaseURL: "https://dues-35631-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dues-35631",
  storageBucket: "dues-35631.appspot.com",
  messagingSenderId: "94288131228",
  appId: "1:94288131228:web:2bb1f35fd1b70981ce2959",
  measurementId: "G-53X1WC0P93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




const Home = () => {

  const [documents, setDocuments] = useState([]);
  const [selectedFileContent, setSelectedFileContent] = useState("");
  const [selectedFileType, setSelectedFileType] = useState("")
  const [selectedFileName, setSelectedFileName] = useState("")

  const addedit = async () => {
    const querySnapshot = await getDocs(collection(db, "hermesdb"));
    const documentsData = querySnapshot.docs.map(doc => doc.data());
    setDocuments(documentsData);
  };

  useEffect(() => {
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "hermesdb"));
      const documentsData = querySnapshot.docs.map(doc => doc.data());
      setDocuments(documentsData);
    };

    fetchDocuments();

  }, [db]);

  const handleFileClick1 = (content) => {
    setSelectedFileContent(content);
  };

  const handleFileClick2 = (content) => {
    setSelectedFileType(content);
  };

  const handleFileClick3 = (content) => {
    setSelectedFileName(content);
  };

  const handlesubmit = () => {
    
  }

  console.log(documents);

return (
  <div className="flex h-screen overflow-x-hidden w-screen max-w-full">
    <Sidebar files={documents} onFileClick1={handleFileClick1} onFileClick2={handleFileClick2} onFileClick3={handleFileClick3}/>
    <EditorPage handlesubmit={handlesubmit} content={selectedFileContent} filetype={selectedFileType} handlechange={handleFileClick1}/>
  </div>
  );
};

export default Home;
