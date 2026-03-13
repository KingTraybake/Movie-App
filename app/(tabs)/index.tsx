import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";

  export default function Index() {
    const router = useRouter();

    const { data: movie}

    return (
      <View style={{ flex: 1, backgroundColor: '#030014' }}>
        <Image source={images.bg} style={{ position: 'absolute', width: '100%', zIndex: 0 }}/>

        <ScrollView
          style={{ flex: 1, paddingHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
            alignItems: 'center',
          }}
        >
          <Image
            source={icons.logo}
            style={{
              width: 30,
              height: 36,
              marginTop: 20,
              marginBottom: 5,
            }}
          />

          <View className="flex-1 mt-5">
            <SearchBar 
              onPress={() => router.push('/search')}
              placeholder="Search for a movie"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
