import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
    placeholder: string;
    onPress?: () => void;
}

  const SearchBar = ({ placeholder, onPress }: Props) => {
      return (
          <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#0f0d23',
              borderRadius: 50,
              paddingHorizontal: 20,
              paddingVertical: 16
          }}>
              <Image
                  source={icons.search}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                  tintColor="#ab8bff"
              />
              <TextInput 
                onPress={onPress}
                placeholder={placeholder}
                value=""
                onChangeText={() => {}}
                placeholderTextColor="#a8b5db"
                className="flex-1 ml-2 text-white"
              />
          </View>
      )
  }

  export default SearchBar;