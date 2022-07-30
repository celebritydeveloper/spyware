import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { app, database } from "../service/firebase";
import { collection, addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
const dbInstance = collection(database, "histories");


const Add = () => {
    const [history, setHistory] = useState("");
    
    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const saveHistory = (event) => {
        event.preventDefault();
        addDoc(dbInstance, {
            id: randomNumberInRange(1, 100000),
            history: history
        }).then(() => {
            setHistory("");
        })
        
    }


    const handleChange = (e) => {
        setHistory(e.target.value);
    }


  return (
    <div className={styles.container}>
      <Head>
        <title>Add History</title>
        <meta name="description" content="Add new browser history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> Add Browser History </h1>

        <form className="w-[35%] mt-12" onSubmit={saveHistory}>
            <div className="mb-6">
                <label className="flex mb-1">History</label>
                <input className="flex w-full bg-white py-3 text-black px-2 focus:outline-none rounded-md" type="text" name="history" onChange={handleChange} value={history} />
            </div>
            <div className="flex items-center justify-center">
                <button className="mx-auto w-[50%] rounded-md bg-yellow-500 h-12" type="submit">Add</button>
            </div>
        </form>
      </main>
    </div>
  )
}

export default Add;
