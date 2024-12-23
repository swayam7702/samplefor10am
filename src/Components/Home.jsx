import React from 'react'
import '../index.css'

import {Button, Card} from 'react-bootstrap'
const Home = () => {
  return (
   <>
     <div className='sec'>
        {/* <h1>Hey This is Home Section</h1> */}
        <Button>Click Here</Button>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/12/29/18/59/st-petersburg-6902540_1280.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
    <div className='sec'>
      <h1>Hey This is Another  Home Section</h1>
    </div>
   </>
  )
}

export default Home
