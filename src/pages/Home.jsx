
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [data, setData] = useState(null);


  // usenavigate
  const navigate = useNavigate()
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        setData(res);

      }).catch((err) => {
        console.log(err);

      })
  }, [])

  const singleProduct = (item) => {
    navigate(`singleproduct/${item.id}`)
  }


  return (
    <>
      <h1 className='text-center'>All Products</h1>
      <div className='main-div'>
        {
          data ? data.map((item) => {
            return <div key={item.id} style={{
              border: '1px solid black',
              margin: '15px',
              padding: '25px',
              width: '350px',


            }}>
              <img src={item.image} alt={item.title} style={{
                maxWidth: '300px',
                maxHeight: '250px',
                objectFit: 'cover'
              }} />
              <h3>{item.category}</h3>
              <p>{item.description}</p>
              <p>Pice: {item.price}</p>
              <button onClick={() => singleProduct(item)}>show more</button>
            </div>
          }) : <h1>Loading..</h1>
        }
      </div>
    </>
  )
}

export default Home