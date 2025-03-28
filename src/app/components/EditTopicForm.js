"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const router = useRouter()


  console.log("Title:", title, "Description:", description);

 

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ newTitle, newDescription })
      })

      if(!res.ok){
        throw new Error("field to put")
      }

      if (res.ok) {
        router.push("/")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 border border-slate-300 my-3 rounded shadow-sm">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          value={newTitle}
          name="newTitle"
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="border border-slate-300 px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={newDescription}
          name="newDescription"
          onChange={(e) => setNewDescription(e.target.value)}
          type="text"
          placeholder="Description"
          className="border border-slate-300 px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Update Topic
        </button>
      </form>
    </div>
  )
}

export default EditTopicForm
