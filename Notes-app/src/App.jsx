
import React, { useState } from 'react'


const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler=(e)=>{
    console.log(title);
    console.log(details);
    e.preventDefault(); 
    const copytask=[...task];
    copytask.push({title,details});
    setTask(copytask);

   
    setDetails('');
    setTitle('');
    
  }
  const deletenote=(idx)=>{
  const copytask=[...task];
   copytask.splice(idx,1);
    setTask(copytask);
  }
  

  return (
    <div className=' h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}  className=' p-10 flex lg:w-1/2 items-start gap-3 text-whilte flex-col ' action="">
        <h1 className='text-2xl font-bold'>Add Notes </h1>
         {/*heading */}
          <input className='border-2 w-full text-white rounded p-2' type="text" placeholder='Enter notes heading'
          value={title} 
          onChange={(e)=>{
          setTitle(e.target.value);
          }} />
         {/* full text*/}
        <textarea className='border-2 w-full rounded  text-white h-25 py-2 px-2' type="text" placeholder='Enter Details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value); 
        }} />
        <button className='border-2 active:bg-gray-500 w-full rounded py-5 px-2 text-black bg-white'>Add notes</button>  
      </form>
      <div className='px-20 h-full border-l-2'>
         <h1 className='text-2xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start mt-2 gap-4 overflow-auto'>
        {task.map(function(elem,idx){
          return <div className="h-52 w-40  p-5 bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZiRIBKbZmja-YbH5swhNMf-WcFTpOS4zSQ&s')] rounded"><h3 className='text-black font-bold text-2xl leading-tight'>{elem.title}</h3>
          <p className=' mt-2 text-gray-600 leading-tight'>{elem.details}</p>
          <button onClick={()=>deletenote(idx)} className=' w-full cursor-pointer active:scale-95 bg-red-500 rounded-xl mt-23 ml-1 text-white px-2'>Delete</button>
          </div>
        })}
        
        </div>
        
      </div>

    </div>
  )
}

export default App