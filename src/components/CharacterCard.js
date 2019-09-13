import React from "react";
import { Card } from "semantic-ui-react"

export default function CharacterCard(props) {
  return (
    <Card
      image={props.character.image}
      header={props.character.name}
      meta={props.character.status}
    />
  )
}
