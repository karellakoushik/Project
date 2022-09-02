import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./machines.css"
import { useNavigate } from 'react-router-dom'

function Machines() {
  const navigate = useNavigate()
  return (
    <div className='machine-main'>
     <CardGroup>
      <Card onClick={()=> navigate('/check-registered-machines')}>
       
        <Card.Body>
          <Card.Title>Check Registered Machines</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card onClick={()=> navigate('/machines-settings')}>
        
        <Card.Body>
          <Card.Title>Settings</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    </div>
  );
    

}

export default Machines