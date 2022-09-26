import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { WeatherModel, WeatherSnapshot } from "../Weather/weather"
//import { withEnvironment } from "../extensions/with-environment"
/**
 * Example store containing Rick and Morty characters
 */
export const WeatherStoreModel = types
  .model("WeatherStore")
  .props({
    weathers: types.optional(types.array(WeatherModel), [])
  })
  
  .actions((self) => ({
    getWeather(newX : number, newY: number, baseTime, timePlus: number){

        //? weather api 와 더 짜임새있게 짜기 


    }
  }))

  


type WeatherStoreType = Instance<typeof WeatherStoreModel>
export interface WeatherStore extends WeatherStoreType{}
type WeatherStoreSnapshotType = SnapshotOut<typeof WeatherStoreModel>
export interface WeatherStoreSnapshot extends WeatherStoreSnapshotType {}
export const createWeatherStoreDefaultModel = () => types.optional(WeatherStoreModel, {})
