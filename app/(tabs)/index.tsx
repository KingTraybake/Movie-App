import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/usefetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

  export default function Index() {
    const router = useRouter();

    const { 
      data: movies, 
      loading: moviesLoading, 
      error: moviesError 
    } = useFetch(() => fetchMovies({ 
      query: ''
    }))

    return (
      <View style={{ flex: 1, backgroundColor: '#030014' }}>
        <Image source={images.bg} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }} />

        <ScrollView style={{ flex: 1, paddingHorizontal: 20 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%", paddingBottom: 20}}>
          <Image source={icons.logo} style={{ width: 48, height: 40, marginTop: 80, marginBottom: 20, alignSelf: 'center' }} />

          {moviesLoading ? (
            <ActivityIndicator 
              size="large"
              color="#0000ff"
              style={{marginTop: 10, alignSelf: 'center'}}
            />
          ) : moviesError ? (
            <Text>Error: {moviesError?.message}</Text>
          ) : (
            <View style={{ flex: 1, marginTop: 20 }}>
            <SearchBar 
              onPress={() => router.push('/search')}
              placeholder="Search for a movie"
            />

            <>
              <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold', marginTop: 5, marginBottom: 3}}>Latest Movies</Text>

              <FlatList 
                data={movies}
                renderItem={({ item }) => (
                  <MovieCard 
                    {...item}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10
                }}
                style={{ marginTop: 2, paddingBottom: 32 }}
                scrollEnabled={false}
              />
            </>
          </View>
          )}
        </ScrollView>
      </View>
    );
  }
