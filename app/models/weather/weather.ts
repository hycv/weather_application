import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */

 type _TimeType = { 
  year:number
  month: number
  day: number
  hour: number
  minute: number
  }

export const WeatherModel = types
  .model("Weather")
  .props({
    id: types.identifierNumber,
    //? location_id : types.identifierNumber, 이것의 필요성 + 활용성 더 생각필요
    time_plus : types.number,
    rain_or_not : types.boolean,
    sky : types.string,
    tem : types.number,
    rain_amount : types.number,
    current_time:types.frozen<_TimeType>(),
    marked_time: types.frozen<_TimeType>(),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

  //? 참고: https://mobx-state-tree.js.org/concepts/references 
type WeatherType = Instance<typeof WeatherModel>
export interface Weather extends WeatherType {}
type WeatherSnapshotType = SnapshotOut<typeof WeatherModel>
export interface WeatherSnapshot extends WeatherSnapshotType {}
export const createWeatherDefaultModel = () => types.optional(WeatherModel, {})
