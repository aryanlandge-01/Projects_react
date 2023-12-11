import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {

    const {userid} = useParams()
    
  return (
    <div>
       <h2 className="text-center"> This users {userid} Page to get github info and the id </h2>
    </div>
  )
}

export default User;