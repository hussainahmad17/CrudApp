"use client"
import React from 'react'
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation';
const RemoveBtn = ({id}) => {
  const router = useRouter()
  const removeTopic = async () => {
  const confrimed = confirm("Lody! Are you sure?")
  if(confrimed){
    const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
      method: "DELETE"
    });
    if(res.ok){
      router.refresh()
    }
  }
  }
  return (
    <div>
      <button onClick={removeTopic} className='text-red-500 cursor-pointer'>
      <MdDelete  size={24}/>
      </button>
    </div>
  )
}

export default RemoveBtn
 