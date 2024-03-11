import React from "react";
import {Main, Text, useMedia, View, XGroup, XStack, YStack,Separator} from "tamagui"
import { Platform } from "react-native";
import { color } from "@tamagui/themes";
import Icon from 'react-native-vector-icons/FontAwesome';

export default CodeRender=()=>{
    const media= useMedia();
    return (
         <Main  flex={1} $gtSm={{backgroundColor:color.pink2Light}} $sm={{backgroundColor:Platform.OS==="web"?"white":"white"}}>
            <View $gtSm={{marginHorizontal:"10%" ,marginVertical:"1%"}} $sm={{margin:25}}>
            {
                //Text Color is White in Desktop
                media.gtSm ? (
                    <View>
                        <XGroup height={60}  flex={1} backgroundColor={"white"} justifyContent="center" alignItems="center" >
                           <XGroup.Item>
                               <Text  color={"black"} fontWeight={"bold"} fontSize={35} fontStyle="normal" paddingHorizontal={10} paddingRight={30}>Zomato</Text>
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
                    {/* <Text  color={"black"}>Hello22</Text> */}

                    </View>
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
            </View>
         </Main>
    )
}