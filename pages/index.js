import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { app, database } from "../service/firebase";
import { collection, getDocs } from "firebase/firestore";
const dbInstance = collection(database, "histories");

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = () => {
    getDocs(dbInstance)
        .then((data) => {
        setData(data.docs.map((item) => {
            return { ...item.data(), id: item.id }
        }));
        console.log(data);
    })
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Browser History</title>
        <meta name="description" content="List browser history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> Browser History </h1>

        <div className="w-[35%] mt-12">
          <p className={`text-center ${data.length > 0 ? "hidden" : "flex text-center w-full" }`}>Fetching...</p>
          <ul>
            { data.map((item, index) => (
              <li className="border w-full px-2 py-1 mb-4" key={item.id}>
                <a href={item.history} target="_blank" rel="noreferrer" className="flex w-full">{ item.history }</a>
              </li>
            ))}
            
          </ul>
        </div>
      </main>
    </div>
  )
}
