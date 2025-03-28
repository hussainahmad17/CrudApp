import EditTopicForm from '@/app/components/editTopicForm'
import React from 'react'


const topicById =async (id) => {
  try {
   const res =  await fetch(`http://localhost:3000/api/topics/${id}` , {cache:"no-store"})
   if(!res.ok){
    throw new  Error("field to fetch")
   }
   return res.json()
  } catch (error) {
    console.log(error);
  }
}


const page =async ({params}) => {
  const {id} =await params;
  console.log(id);
  
  const {Indtopic} =await topicById(id)
  const {title , description} = Indtopic
  console.log(title, description);
  

  return (
     <> 
      <EditTopicForm id={id} title={title} description={description}/>
     </>
  )
}

export default page
