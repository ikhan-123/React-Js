import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const [data, setData] = useState(null);


  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        setData(res);

      }).catch((err) => {
        console.log(err);

      })
  }, [id])

if(!data){
  return <div>Loading...</div>;
}



  return (
    <>
      <img src={data.image} alt={data.title} style={{
        maxWidth: '300px',
        maxHeight: '250px',
        objectFit: 'cover'
      }} />
      <h3>{data.category}</h3>
      <p>{data.description}</p>
      <p>{data.price}</p>
    </>
  )
}

export default SingleProduct