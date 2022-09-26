import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { UserModel, UserSnapshot } from "../user/user"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Example store containing Rick and Morty characters
 */
export const UserStoreModel = types
  .model("UserStore")
  .props({
    users: types.optional(types.array(UserModel), [])
  })
  .actions((self) => ({
    saveUser: (userId : string, userPassword: string) => {
        const newId = self.users.length;

        const newUser = UserModel.create({
            id: newId,
            user_id: userId,
            user_password: userPassword
        })

        self.users.push(newUser)
    }
  }))

  .actions((self) => ({

    getUser

  }))
  


type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType{}
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType {}
export const createUserStoreDefaultModel = () => types.optional(UserStoreModel, {})
