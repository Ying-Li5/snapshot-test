import React from "react";
import Card from "react-bootstrap/Card"
import FPic from './FPic.jpg'

function FBattleCard() {
    return (
        <div className="card">
          <Card style={{ width: "18rem"}}>
          <Card.Img variant="top" src={FPic} />
          
          <Card.Body>
              <Card.Title>Fakemon Battle</Card.Title>
              <Card.Text>
              Fakèmon Battle was created for my milestone projects for people to see my skills 
              and knowledge built during Part 1 of my Bootcamp studies, it was inspired from 
              playing Pokèmon while growing up
              </Card.Text>
          </Card.Body>
          </Card>
        </div>
    );
  }
  
  export default FBattleCard