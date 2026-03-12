import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from 'react';
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ icon, focused, label }: { icon: any; focused: boolean; label: string }) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                style={{ width: 112, height: 56, borderRadius: 28, overflow: 'hidden', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 18 }} // marginTop was 16
            >
                <Image source={icon} tintColor="#151312" style={{ width: 20, height: 20 }} />
                <Text style={{ color: '#151312', fontSize: 16, fontWeight: '600', marginLeft: 8 }}>{label}</Text>
            </ImageBackground>
        );
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
            <Image source={icon} tintColor="#A8B5DB" style={{ width: 20, height: 20 }} />
        </View>
    );
}

const _Layout = () => {
    return (
        <Tabs screenOptions={{ tabBarShowLabel: false, tabBarItemStyle: {
            width: '100%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center'
        } ,
        tabBarStyle: {
            backgroundColor: '#0f0D23',
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 36,
            height: 52,
            position: 'absolute',
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: '#0f0D23'
        }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.home} focused={focused} label="Home" />
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.search} focused={focused} label="Search" />
                    )
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.save} focused={focused} label="Saved" />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.person} focused={focused} label="Profile" />
                    )
                }}
            />
        </Tabs>
    )
}

export default _Layout;