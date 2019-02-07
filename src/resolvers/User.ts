import { Context } from '../utils'

export const User = {
  profile: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id })
  },
}
