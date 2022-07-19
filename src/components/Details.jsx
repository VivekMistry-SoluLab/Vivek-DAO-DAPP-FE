import React from 'react'

const Details = () => {
  return (
    <div>
        <div className='mx-auto max-w-2xl'>
            <div className=' mt-5  text-3xl font-bold text-gray-50'>
               <h1>Grants Commitee Election for S5 and S6</h1>
            </div>
            <div className='mt-5 flex flex-row'>
                <button class="bg-green-500 hover:bg-blue-700 text-white font-bold  px-1 rounded-full">Active</button>
                <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg" class=" h-6 w-6 ml-2 rounded-full" alt=""/>
                <p className=" font-medium text-gray-400 ml-2">BanklessDao by icedcool.eth</p>
                <button class=" hover:bg-blue-700 text-gray-400 font-bold  px-1 rounded-full">Core</button>
            </div>
            <div>
                <p className=" font-medium text-xl text-gray-400 mt-5">Title: Grants Committee Election for S5 and S6</p>
                <p className=" font-medium text-xl text-gray-400 mt-5">Author: Icedcool</p>
                <p className=" font-medium text-xl text-gray-400 mt-5">Quorum Requirement: Not Applicable</p>
                <p className=" font-medium text-xl text-gray-400 mt-5">Voting Threshold: Not Applicable (Weighted Voting)</p>
                <p className=" font-medium text-xl text-gray-400 mt-5">Forum Post: Here</p>
            </div>
            <div className=' mt-5  text-3xl font-bold text-gray-50'>
               <h1>SUMMARY</h1>
            </div>
            <div>
               <p className=" font-medium text-xl text-gray-400 mt-5">According to the specifications for Season 1, there are three seats open for the Grants Committee for the next term (Season 5 and Season 6).</p>
            </div>
            <div className=' mt-5  text-3xl font-bold text-gray-50'>
               <h1>Members stepping down</h1>
            </div>
            <div>
               <ul className='list-disc list-inside'>
                 <li className=" font-medium text-xl text-gray-400 mt-5">Kouros (term limit)</li>
                 <li className=" font-medium text-xl text-gray-400 mt-5">Chuck</li>
                 <li className=" font-medium text-xl text-gray-400 mt-5">Icedcool (term limit)</li>
  
               </ul>
            </div>
            <div className=' mt-5  text-3xl font-bold text-gray-50'>
               <h1>Election</h1>
            </div>
            <div>
               <p className=" font-medium text-xl text-gray-400 mt-5">Due to the limitation of characters that Snapshot imposes, it is not possible to have the full applications in this page.</p>
            </div>
            <div>
               <p className=" font-medium text-xl text-gray-400 mt-5">You can get more information about this election and see all applications in this forum post.</p>
            </div>
            <div>
               <p className=" font-medium text-xl text-gray-400 mt-5">The voting system is weighted voting. You can distribute your vote to as many candidates as you wish and also choose the weight on it.</p>
            </div>
            <div>
               <p className=" font-medium text-xl text-gray-400 mt-5">The 3 candidates with the most tokens will be elected as Grants Committee members for the next two Seasons.</p>
            </div>
        </div>
       
    </div>
  )
}

export default Details