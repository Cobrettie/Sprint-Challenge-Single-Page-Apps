import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard(props) {
  return (
    <Card 
      header={props.location.name}
      meta={props.location.type}
      description={
        <div>
          <p>{props.location.dimension}</p>
          <p>{props.location.residents.length} residents</p>
        </div>
      }
    />
  )
}
