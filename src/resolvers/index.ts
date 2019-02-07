import { Query } from './Query'
import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { profile } from './Mutation/profile'
import { User } from './User'
import { Profile } from './Profile'

export default {
  Query,
  Mutation: {
    ...auth,
    ...profile,
  },
  Subscription,
  User,
  Profile,
}
