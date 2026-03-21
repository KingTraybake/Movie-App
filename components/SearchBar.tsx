import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
    placeholder: string;
    onPress?: () => void;
    value: string;
    onChangeText: (type: string) => void;
}

  const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
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
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#a8b5db"
                style={{ flex: 1, marginLeft: 2, color: 'white' }}
              />
          </View>
      )
  }

  export default SearchBar;