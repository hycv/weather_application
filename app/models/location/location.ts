import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { number } from "mobx-state-tree/dist/internal"

/**
 * Model description here for TypeScript hints.
 */


//? 참조: https://mobx-state-tree.js.org//API/#frozen 
type _LocationType = { x: number, y: number}

export const LocationModel = types
  .model("Location")
  .props({
    id: types.identifierNumber,
    // location: types.compose(x : number, y: number),
    location: types.frozen<_LocationType>(),
    //*favorite: types.boolean -> user 쪽으로 돌리는게 나을듯
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type LocationType = Instance<typeof LocationModel>
export interface Location extends LocationType {}
type LocationSnapshotType = SnapshotOut<typeof LocationModel>
export interface LocationSnapshot extends LocationSnapshotType {}
export const createLocationDefaultModel = () => types.optional(LocationModel, {})
