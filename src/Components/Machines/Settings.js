import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom'

export default function Settings() {
    const navigate = useNavigate()
  return (
    <>
    <CardGroup>
        <Card onClick={()=> navigate('/register-machine')} >
        <Card.Body>
          <Card.Title> Register Machine</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>


    
    </>
  )
}
