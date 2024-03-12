import React from "react";
import {Main, Text, useMedia, View, XGroup, XStack, YStack,Separator, Image, ScrollView, Group, Card} from "tamagui"
import { FlatList, Platform, SectionList, StyleSheet, TouchableOpacity } from "react-native";
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
                            <Text color={"grey"} fontSize={30} paddingTop={30} marginVertical={20}>Insperation Of Your First Order</Text>
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
                            <Text color={"grey"} fontSize={30} paddingTop={30}   marginVertical={20} >Top Brands For You</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={media.gtSm?true:false}   flex={1}  flexWrap="wrap"    scrollIndicatorInsets={{ top: 1, bottom: 1, left: 1, right: 10 }}>
                                <FlatList
                                        data={ListOfMind}
                                        renderItem={({item}) => {
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
                            <Text color={"grey"} fontSize={30} marginTop={40}>Delivery Restaurents in Guwathi</Text>
                            <ScrollView flex={1} showsVerticalScrollIndicator={false} >
                                <FlatList
                                    data={ListOfResterentItems}
                                    renderItem={({ item }) => (
                                        <Card width={media.gtLg?300:200} height={media.gtLg?300:200} margin={20} borderRadius={20} backgroundColor={"white"}>
                                            <Card.Header padded>
                                                <Image source={{ uri: item.path }} style={styles.image} borderRadius={20} />
                                                <YStack paddingTop={media.gtLg?90:10} width={"100%"}>
                                                    <XStack padding={20} flex={1} justifyContent="space-between">
                                                        <Text color={"black"} fontSize={20} >{item.resturentName}</Text>
                                                        <Text color={"white"} backgroundColor={"green"} borderRadius={2} width={40} height={20} textAlign="center">{item.rating}*</Text>
                                                    </XStack>
                                               </YStack>    
                                            </Card.Header>
                                            <Card.Footer padding={5}>
                                           
                                            </Card.Footer >
                                            <Card.Background>
                                               <Image source={{ uri: item.path,}} width={"100%"} height={"70%"} borderRadius={20} />
                                            </Card.Background >
                                      </Card>
                                    )}
                                    keyExtractor={(item, index) => index.toString()}
                                    numColumns={3} 
                                    ItemSeparatorComponent={<View style={{height:50, width:60}}/>}
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


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    itemContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
   
  });