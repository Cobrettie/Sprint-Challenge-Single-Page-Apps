import React from "react";
import { Card } from "semantic-ui-react"

export default function EpisodeCard(props) {
    return (
        <Card
            header={props.episode.name}
            meta={props.episode.date}
            description={props.episode.episode}
        />
    )
}