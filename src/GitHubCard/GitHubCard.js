import React from "react"
import Card from "react-bootstrap/Card"
import Totoro from './totoro.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={Totoro} />
        {/* Source: https://www.kindpng.com/imgv/miJTho_kawaii-cute-totoro-studio-ghibli-chibi-hd-png/ */}
        <Card.Body>
            <Card.Title>Totoro</Card.Title>
            <Card.Text>
              I am from the 1988 film My Neighborhood Totoro animated by studio Ghibil.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard