"use client"
import React, { useState }  from 'react'
import { useRouter } from 'next/navigation'
const Page =  () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, description })
      });

      if (res.ok) {
        router.push("/")
      }
      else {
        throw new Error("failed to add topic")
      }
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className="max-w-md mx-auto p-4 border border-slate-300 my-3 rounded shadow-sm">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          value={title}
          name='title'
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="border border-slate-300 px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={description}
          name='description'
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
          className="border border-slate-300 px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add Topic
        </button>
      </form>
    </div>
  )
}

export default Page
