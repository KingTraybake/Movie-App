import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Movie {
    id: number;
    poster_path: string | null;
    title: string;
    vote_average: number;
    release_date: string;
}

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {

    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity style={{ width: '30%'}}>
                <Image
                    source={{ 
                        uri : poster_path 
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://placeholder.co/600x400/1a1a1a/ffffff.png'
                    }}
                    style={{ width: '100%', height: 208, borderRadius: 8 }}
                    resizeMode="cover"
                />

                <Text style={{ color: 'white', fontSize: 14, lineHeight:20, fontWeight: 'bold', marginTop: 2 }} numberOfLines={1}>
                    {title}
                </Text>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', columnGap: 4}}>
                    <Image source={icons.star} style={{width: 16, height:16}}/>
                    <Text style={{fontSize: 12, lineHeight: 16, color: 'white', fontWeight: 'bold', textTransform: 'uppercase'}}>{Math.round(vote_average / 2)}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 12, lineHeight: 16, color: '#9CA4AB', fontWeight: 'medium', marginTop: 1}}>{release_date?.split('-')[0]}</Text>
                    <Text style={{fontSize: 12, lineHeight: 16, color: '#9CA4AB', fontWeight: 'medium', textTransform: 'uppercase'}}>
                        Movie
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}
export default MovieCard