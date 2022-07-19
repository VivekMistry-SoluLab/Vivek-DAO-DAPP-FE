import React from 'react'

const Card = () => {
  return (
    <div>
       
        <a href="#" className="block p-6 m-2 max-w-2xl    rounded-lg border shadow-md hover:bg-gray-700" style={{borderColor:"#2d2d2d"}}>
        <div className='mb-3 flex flex-row justify-between'>
           <div className='flex flex-row'>
                <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg" class=" h-6 w-6 rounded-full" alt=""/>
                <p className=" font-medium text-gray-400 ml-2">BanklessDao by icedcool.eth</p>
                <button class=" hover:bg-blue-700 text-gray-400 font-bold  px-1 rounded-full">Core</button>
           </div>
              
                <button class="bg-green-500 hover:bg-blue-700 text-white font-bold  px-3 rounded-full">Active</button>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white group-hover:text-gray-400">Grants Commitee election for S4 and S5</h5>
        <p className="font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <p className="font-normal text-gray-400">7 days left</p>
        </a>
        
    </div>
  )
}

export default Card