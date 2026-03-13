import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

interface Movie {
    id: number;
    poster_path: string | null;
    title: string;
    vote_average: number;
    release_date: string;
}

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
    const imageUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'https://placehold.co/600x400/1a1a1a/ffffff.png';

    return (
        <Link href={`/movie/${id}` as any}>
            <TouchableOpacity style={{ width: '30%', marginBottom: 10 }}>
                <Image
                    source={{ uri: imageUrl }}
                    style={{ width: '100%', height: 180, borderRadius: 10 }}
                    resizeMode="cover"
                />
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginTop: 5 }} numberOfLines={1}>
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}
export default MovieCard