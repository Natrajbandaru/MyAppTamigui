import React from "react";
import {Main, Text, useMedia, View, XGroup, XStack, YStack,Separator, Image, ScrollView, Group} from "tamagui"
import { FlatList, Platform, SectionList, TouchableOpacity } from "react-native";
import { color } from "@tamagui/themes";
import Icon from 'react-native-vector-icons/FontAwesome';
import ListOfMind from "Component/ListData/ListOfMind";
import ListOfResterentItems from "Component/ListData/ListOfRestarentPhotos";

export default CodeRender=()=>{
    const media= useMedia();
    const image=require("../../assets/Photos/food1.jpg")
    return (
        
         <Main  flex={1} justifyContent="center" alignItems="center" $gtSm={{backgroundColor:color.pink2Light}} $sm={{backgroundColor:Platform.OS==="web"?"white":"white"}}>

            {
                //Text Color is White in Desktop
                media.gtSm ? (
                    <ScrollView $gtSm={{marginHorizontal:"10%" ,marginVertical:"1%",flex:1, width:media.gtLg?"60%":"80%"}} showsVerticalScrollIndicator={false}>

                            <XGroup height={60}  flex={1} backgroundColor={"white"} justifyContent="center" alignItems="center" disabled>
                                <XGroup.Item>
                                    <Text  color={"black"} fontWeight={"bold"} fontSize={35} fontStyle="normal" paddingHorizontal={10} paddingRight={30}>YAPIO</Text>
                                </XGroup.Item>
                                <XGroup.Item>
                                    <Icon name="location-arrow" size={25} color="red" style={{marginLeft:"1%",marginRight:"2%"}}/>
                                    <Text  color={"grey"}   fontStyle="normal" paddingHorizontal={10} paddingRight={30}  width={200}>Guwathi</Text>
                                    <Icon name="toogle" size={10} color="black" style={{marginLeft:"1%",marginRight:"2%"}}/>
                                </XGroup.Item>
                                <XGroup.Item>
                                    <Icon name="search" size={25} color="red" style={{marginLeft:"1%",marginRight:"2%"}}/>
                                    <Text  color={"grey"}   fontStyle="normal" paddingHorizontal={10} paddingRight={30}  width={400}>Guwathi</Text>
                                    <Icon name="toogle" size={10} color="black" style={{marginLeft:"1%",marginRight:"2%"}}/>
                                </XGroup.Item>
                                <XGroup.Item>
                                    <Text  color={"grey"}   fontStyle="normal" paddingHorizontal={10} paddingRight={30}  width={100}>Login</Text>
                                    <Text  color={"grey"}   fontStyle="normal" paddingHorizontal={10} paddingRight={30}  width={100}>SignUp</Text>
                                </XGroup.Item>
                            </XGroup>
                            <Text color={"grey"} fontSize={30} paddingTop={30}>Insperation Of Your First Order</Text>
                            <ScrollView mt={10}  horizontal={true} showsHorizontalScrollIndicator={media.gtSm?true:false}        scrollIndicatorInsets={{ top: 1, bottom: 1, left: 1, right: 10 }}>
                                <FlatList
                                        data={ListOfMind}
                                        renderItem={({item}) => (
                                            <Image
                                                source={{ width: 90, height: 90, uri: item.image }}
                                                borderRadius={100}
                                            /> 
                                        )}
                                    horizontal={true}
                                    ItemSeparatorComponent={<View style={{height:10, width:60}}></View>}
                                />
                            </ScrollView>
                            <Text color={"grey"} fontSize={30} paddingTop={30}>Top Brands For You</Text>
                            <ScrollView mt={10}  horizontal={true} showsHorizontalScrollIndicator={media.gtSm?true:false}   flex={1}  flexWrap="wrap"    scrollIndicatorInsets={{ top: 1, bottom: 1, left: 1, right: 10 }}>
                                <FlatList
                                        data={ListOfMind}
                                        renderItem={({item}) => {
                                            alert("kk")
                                            return (
                                            <Image
                                                source={{ width: 90, height: 90, uri: item.image }}
                                                borderRadius={100}
                                            /> 
                                        )}
                                    }
                                    horizontal={true}
                                    ItemSeparatorComponent={<View style={{height:10, width:60}}></View>}
                                />
                            </ScrollView>
                            <ScrollView width={"100%"} flex={1} flexWrap="wrap">
                            <FlatList
                                        data={ListOfResterentItems}
                                        renderItem={({item}) => (
                                           <Text>{item.offer}</Text>
                                        )}
                                    ItemSeparatorComponent={<View style={{height:10, width:60}}></View>}
                                />
                            </ScrollView>
                            
                    </ScrollView>
                        
                ) : 
                (
                    <View>
                           <XStack height={70}  backgroundColor={"black"}>
                               <Text  color={"white"}>Hello22</Text>

                        </XStack>
                    </View>
                )
            }

               <View >

               </View>
         </Main>
    )
}