import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from  "./EpisodeCard";

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(res => {
            setEpisodes(res.data.results)
            setIsLoading(false)
        })
        .catch(err => console.error(err))  
    }, [])

    return (
        <section className="grid-view">
            {!isLoading ? episodes.map(episode => <EpisodeCard episode={episode} />) : (<p>Loading...</p>)}
        </section>
    )
}