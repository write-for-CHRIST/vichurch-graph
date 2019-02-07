import { Query } from './Query'
import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { profile } from './Mutation/profile'
import { activitySchedule } from './Mutation/activity-schedule'
import { User } from './User'
import { Profile } from './Profile'
import { ActivitySchedule } from './ActivitySchedule'

export default {
  Query,
  Mutation: {
    ...auth,
    ...profile,
    ...activitySchedule
  },
  Subscription,
  User,
  Profile,
  ActivitySchedule
}
