
import { Button, Card, H2, Image, Paragraph, ScrollView, XStack } from 'tamagui'
export default CardDemo=()=>{

  return (
    <XStack $sm={{ flexDirection: 'column' }} paddingHorizontal="$4" space >
     <ScrollView>

        <DemoCard/>
        <DemoCard/>
        <DemoCard/>
        <DemoCard/>
        <DemoCard/>
        <DemoCard/>
     </ScrollView>

    </XStack>
  )

}
export function DemoCard() {
  const img= require("../assets/screenshot1.jpg")
  return (

    <Card elevate size="$5" >
      <Card.Header padded>
        <H2>Sony A7IV</H2>
        <Paragraph theme="alt2">Now available</Paragraph>
      </Card.Header>

      <Card.Background>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: 300,
            height: 300,
            uri: img,
          }}
        />
      </Card.Background>

      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$10">Purchase</Button>
      </Card.Footer>

    
    </Card>

  )

}
