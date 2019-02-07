import { getUserId, Context } from '../utils'

export const Query = {
  profile(parent, { id }, ctx: Context) {
    return ctx.prisma.profile({ id })
  },

  me(parent, args, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  },
}
