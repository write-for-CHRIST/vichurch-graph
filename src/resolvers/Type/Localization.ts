import { Context } from '../../utils'

export const Localization = {
  translations({ key }, args, ctx: Context) {
    return ctx.prisma.translations({ where: { localization: { key } } })
  },
}
