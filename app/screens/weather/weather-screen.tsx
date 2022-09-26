import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Text, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Button, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { withRootStore } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `weather: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="weather" component={WeatherScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const WeatherScreen: FC<StackScreenProps<NavigatorParamList, "weather">> = observer(function WeatherScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Button
              testID="log-in-button"
              //style={CONTINUE}
              //textStyle={CONTINUE_TEXT}
              text="login/회원가입"

              //onPress={nextScreen}
            />
      <Button text = "내 위치" />
      <View style = {styles.clockBox}>
        <Text>clock</Text>
        <Text>10시   50분</Text>
        </View>
      <View style = {styles.weatherBox}>
        <Text>10시 30분 : 맑음</Text>
        <Text>11시 00분 : 맑음</Text>
        <Text>11시 30분 : 맑음</Text>
        <Text>12시 00분 : 맑음</Text>
      </View>
      <Button text = "날씨확인"/>
    </Screen>
  );
})

const styles = StyleSheet.create({

  clockBox:{
    width:400, 
    height: 100,
    backgroundColor: '#c9c9c9',
    borderColor: '#FFFFFF'
  },

  weatherBox:{
    width:400, 
    height: 100,
    backgroundColor: '#c9c9c9',
  }
})