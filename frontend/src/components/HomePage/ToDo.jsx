import React, { useContext, useEffect, useState } from 'react'
import Subheading from '../../SubComponents/Subheading'
import { PlusIcon } from '@heroicons/react/24/solid'
import { db } from '../../firebase/firebase'
import { UserContext } from '../../contextProviders/UserContext'
import { addDoc, arrayUnion, collection, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'

const ToDo = ({AddTaskButtonClicked, setAddButtonClicked}) => {

  const {user} = useContext(UserContext);
  const [Todo, setTodo] = useState([]);
  const [Taskname, setTaskName] = useState("");
  const [TaskDescription, setTaskDescription] = useState("");
  let allTasks = [];
  const [completed, setCompleted] = useState(false);

  const UpdateTodoInUserDocument= async (Taskname,TaskDescription) =>{
    const userDocRef = doc(db, "TodoLists", user.uid);
    await updateDoc(userDocRef, {
      Tasks: arrayUnion({
        Taskname,
        TaskDescription
      })
    });
    console.log("Task added successfully");
  }
  useEffect(() => {
    const fetchData = async () => {
      const userDocRef = doc(db, "TodoLists", user.uid);
      const  docSnap = await getDoc(userDocRef);
      setTodo(docSnap.data().Tasks)
      console.log(docSnap.data().Tasks)
    }
    fetchData();
    const unsub = onSnapshot(doc(db, "TodoLists", user?.uid), (docSnap) => {
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setTodo(docSnap.data().Tasks);
      } else {
        console.log("No such document!");
      }
    });

    return () => unsub(); // cleanup listener
  }, []);
  return (
    <>
      {AddTaskButtonClicked &&
        <div className={`absolute w-[600px] h-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl ${AddTaskButtonClicked ? "flex" : "hidden"} flex-col z-50`}>
        <table className='w-full bg-gray-100 flex flex-col gap-4 p-4 justify-between'>
          <tr className='flex w-full justify-between items-center'>
            <th>Name of the task :</th>
            <td className='w-1/2'><input type="text" name="taskName" id="taskName" className='border-1 rounded-sm w-full p-3' value={Taskname} onChange={(e) => {setTaskName(e.target.value)}}/></td>
          </tr>
          <tr className='flex justify-between items-center'>
            <th>Description of the task :</th>
            <td className='w-1/2'><textarea name="taskName" id="taskName" value={TaskDescription} className='w-full border-1 rounded-sm p-3' onChange={(e) => {setTaskDescription(e.target.value)}}></textarea></td>
          </tr>
          <tr className='flex justify-between items-center'>
            <td><button className='px-3 py-2 bg-red-500 text-white rounded-lg cursor-pointer' onClick={() => {
              setAddButtonClicked(false);
            }}>Cancel</button></td>
            <td><button className='px-3 py-2 bg-blue-500 text-white rounded-lg cursor-pointer' onClick={() => {
              if (TaskDescription && Taskname){
                const exists = Todo?.find(task => task.TaskName == Taskname && task.TaskDescription == TaskDescription)
                if (!exists ||  Todo.length == 0){
                  UpdateTodoInUserDocument(Taskname,TaskDescription)
                  allTasks.push({"TaskName" : Taskname,"TaskDescription":TaskDescription})
                  console.log(allTasks);
                }
                else{
                  alert("The task already exists")
                }
              }
              else{
                alert("Please fill all the fields")
              }
              setTaskName("");
              setTaskDescription("");
              setAddButtonClicked(false);
            }}>Add Task</button></td>
          </tr>
        </table>
      </div>
      }
      <div className='w-full h-[300px] bg-white flex flex-col p-4 rounded-xl shadow-md'>
          <Subheading title={"ToDo"} icon = {<PlusIcon className='h-6 w-6 text-black cursor-pointer'/>} addbtnfunction = {setAddButtonClicked}/>
          <div className='overflow-y-auto overflow-x-auto w-full h-[calc(100%-50px)] flex flex-col gap-2'>
            {
              Todo?.map((data,index) => (
                <div key={index} className='flex gap-2 items-center'>
                  <div>
                    <input type="checkbox" name="" id="" className='h-4 w-4' onChange={() => {setCompleted(prev => !prev)}}/>
                  </div>
                  <div  className='z-0 relative flex w-full justify-between items-center p-3 bg-[rgb(218,218,218,0.3)] rounded-lg'>
                    <div className={`w-full h-[2px] bg-green-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${completed ? "flex" : "hidden"}`}></div>
                    <span>{data.Taskname}</span>
                    <span>{data.TaskDescription}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </>
  )
}

export default ToDo
