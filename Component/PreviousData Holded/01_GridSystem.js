import { Stack, Link } from 'expo-router';
import { ScrollView, XStack, YStack ,useMedia} from 'tamagui';

import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';
import CardData from "../Component/CardData";
import CardDemo from "../Component/CardDemo";
export default function Page() {
  const media = useMedia();
  return (
    <ScrollView  borderRadius="$0">
        <YStack>
          <Title>Hello World</Title>
          <Subtitle>This is the first page of your app.</Subtitle>
          <XStack  $sm={{flexDirection:"column"}} space>
             <ScrollView  horizontal={media.gtLg} >
                <CardData/>
                <CardData/>
                <CardData/>
                <CardData/>
                <CardData/>
                <CardData/>
                <CardData/>
                <CardData/>
                <CardData/>
                <CardData/>
                <CardData/>
                <CardData/>
             </ScrollView>
            </XStack>
        </YStack>
    </ScrollView>

  );
}
