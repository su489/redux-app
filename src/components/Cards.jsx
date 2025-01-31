import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData';
import "./style.css"
import { useDispatch } from 'react-redux';
import {ADD} from '../redux/actions/action'


const Cards = () => {

  const [cardsData, setCardsData] = useState(Cardsdata)
  //console.log(data)

const dispatch = useDispatch();

const send = (e)=>{
  console.log(e)

  dispatch(ADD(e));
}

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to cart Projects</h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          cardsData.map((foodCard) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className='mx-2 mt-4 card_style'>

                  <Card.Img variant="top" src={foodCard.imgdata} style={{height:"16rem"}} className="mt-3" />

                  <Card.Body>
                    <Card.Title>{foodCard.rname}</Card.Title>
                    <Card.Text>
                     Price:₹ {foodCard.price}
                    </Card.Text>
                    <div className='button_div d-flex justify-content-center'>

                    <Button variant="primary" onClick={()=>send(foodCard)}
                     className="col-lg-12">Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }
      </div>

    </div>
  )
}

export default Cards