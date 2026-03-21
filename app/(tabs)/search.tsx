import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/usefetch";
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const { 
      data: movies, 
      loading, 
      error,
      refetch: loadMovies,
      reset,
    } = useFetch(() => fetchMovies({ 
      query: searchQuery
    }), false)

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if(searchQuery.trim()) {
                await loadMovies();
            } else {
                reset()
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    return (
        <View style={{flex: 1, backgroundColor: '#030014'}}>
            <Image source={images.bg} style={{flex: 1, position: 'absolute', width: '100%',  zIndex: 0, top: 0, left: 0}} resizeMode="cover"/>
        
            <FlatList 
                data={movies} 
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                style={{paddingHorizontal: 20}}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 16,
                    marginVertical: 16,
                }}
                contentContainerStyle={{paddingBottom: 100}}
                ListHeaderComponent={
                    <>
                        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'center'}}>
                            <Image source={icons.logo} style={{width: 48, height: 40}}/>
                        </View>

                        <View style={{marginVertical: 20}}>
                            <SearchBar 
                                placeholder="Search movies..." 
                                value={searchQuery}
                                onChangeText={(text: string) => setSearchQuery(text)}
                            />
                        </View>

                        {loading && (
                            <ActivityIndicator size="large" color="#0000ff" style={{marginVertical: 12}} />
                        )}

                        {error && (
                            <Text style={{color: 'red', paddingHorizontal: 20, marginVertical: 12}}>
                                Error: {error.message}
                            </Text>    
                        )}

                        {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
                            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                                Search Results for {''}
                                <Text style={{color: 'AB8BFF'}}>{searchQuery}</Text>
                            </Text>
                        )}
                    </>
                }
                ListEmptyComponent={
                    !loading && !error ? (
                        <View style={{marginTop: 40, paddingHorizontal: 20}}>
                            <Text style={{textAlign: 'center', color: '#6b7280'}}>
                                {searchQuery.trim() ? 'No movies found' : 'Search for a movie'}
                            </Text>
                        </View>
                    ) : null
                }
            />
        </View>
    );
}

export default Search