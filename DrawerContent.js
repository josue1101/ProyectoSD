import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Title } from '@react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

function DrawerContent(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView{...props}>
                <View style={styles.drawerContent}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection: 'row', marginTop: 15}}>
                                <Avatar.Image
                                source={{
                                }}
                                size={50}
                                style={{marginTop: 5}}
                            />
                            <View style={{marginLeft: 10, flexDirection: 'column'}}>
                                <Title style={styles.title}>Josue</Title>
                                <Text style={styles.caption} numberOfLines={1}>
                                    josue110114@gmail.com
                                </Text>
                            </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent;