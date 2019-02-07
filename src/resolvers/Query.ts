import { getUserId, Context } from '../utils'

export const Query = {
  profile(parent, { id }, ctx: Context) {
    return ctx.prisma.profile({ id })
  },
  activitySchedules(parent, args, ctx: Context) {
    return ctx.prisma.activitySchedules()
  },
  me(parent, args, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  },
}
