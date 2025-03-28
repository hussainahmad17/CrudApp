import React from 'react';
import { FaEdit } from "react-icons/fa";
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';

export const geteTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", { cache: "no-store" })
    if (!res.ok) {
      throw new Error("field to fetch")
    }

    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const TopicList = async () => {

  const { topics } = await geteTopics();
  console.log(topics);

  return (
    <>
      {topics.map((t, index) => {
        return <div key={index} className="max-w-md mx-auto mt-6 p-4 border border-slate-300 flex justify-between gap-5 items-start rounded shadow-sm">
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id}/>
            <Link href={`/editTopic/${t._id}`}>
              <FaEdit size={24} />
            </Link>
          </div>
        </div>
      })}
    </>
  );
};

export default TopicList;
