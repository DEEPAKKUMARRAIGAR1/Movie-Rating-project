import React from 'react'
import { useParams } from 'react-router-dom';

const SingleMovie = () => {
  const { id } = useParams();
  return <>
  <div>
    <div>Our Single Movie {id} </div>
  </div>
  </>
}

export default SingleMovie
