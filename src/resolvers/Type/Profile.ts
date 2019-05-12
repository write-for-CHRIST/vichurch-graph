import { Context } from '../../utils'

export const Profile = {
  email: ({ id }, args, ctx: Context) => {
    return ctx.prisma.profile({ id }).email()
  },
}
