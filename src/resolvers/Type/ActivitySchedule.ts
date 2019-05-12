import { Context } from '../../utils'

export const ActivitySchedule = {
  activity: ({ id }, args, ctx: Context) => {
    return ctx.prisma.activitySchedule({ id }).activity()
  },
}
