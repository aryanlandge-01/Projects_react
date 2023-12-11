import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()

    // const [data ,setData] = useState("");
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/aryanlandge-01')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });
    
    // },[])


  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white text-4xl p-5'>Github followers: {data.followers}</div>
      <img src={data.avatar_url} alt="profilepic" width={300} />
    </>
  )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/aryanlandge-01')
    return response.json()
}