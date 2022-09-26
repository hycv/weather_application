import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { LocationModel, LocationSnapshot } from "../location/location"
//import { withEnvironment } from "../extensions/with-environment"
/**
 * Example store containing Rick and Morty characters
 */
export const LocationStoreModel = types
  .model("LocationStore")
  .props({
    locations: types.optional(types.array(LocationModel), [])
  })

  .actions((self) => ({
    saveLocation: (newX : number, newY: number) => {
        const newId = self.locations.length;
        const newLocation = LocationModel.create({
            id: newId,
            location : {x: newX, y: newY},
        })
          self.locations.push(newLocation)

  }
}))
/*
.actions((self) => ({
    getLocation: () => {
        if


    }
    //? async
}))
*/
  


type LocationStoreType = Instance<typeof LocationStoreModel>
export interface LocationStore extends LocationStoreType{}
type LocationStoreSnapshotType = SnapshotOut<typeof LocationStoreModel>
export interface LocationStoreSnapshot extends LocationStoreSnapshotType {}
export const createLocationStoreDefaultModel = () => types.optional(LocationStoreModel, {})
